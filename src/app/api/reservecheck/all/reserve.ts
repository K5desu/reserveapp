"use server";
import prisma from "@/lib/prismaclient";

interface Reservation {
  starttime: string;
  finishtime: string;
  room_number: string;
}
export interface ReservationAll {
  author: string;
  starttime: string;
  finishtime: string;
  room_number: string;
}
export async function getReservationByauthorId(author_id: string) {
  try {
    const reserve = await prisma.reserve.findMany({
      where: {
        author_id: author_id,
      },
    });

    if (reserve) {
      return {
        reserve,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get reservation information");
  }
}

export async function getReservationsByDate(
  date: string
): Promise<Reservation[]> {
  const reservations = await prisma.reserve.findMany({
    where: {
      date: date,
    },
    select: {
      starttime: true,
      finishtime: true,
      room_number: true,
    },
  });

  return reservations.map((reservation) => ({
    starttime: reservation.starttime,
    finishtime: reservation.finishtime,
    room_number: reservation.room_number,
  }));
}

export async function getRentalReservations(): Promise<ReservationAll[]> {
  const reservations = await prisma.reserve.findMany({
    where: {
      isRenatal: true,
    },
    select: {
      starttime: true,
      finishtime: true,
      room_number: true,
      author_id: true,
    },
  });

  return reservations.map((reservation) => ({
    starttime: reservation.starttime,
    finishtime: reservation.finishtime,
    room_number: reservation.room_number,
    author: reservation.author_id,
  }));
}

export async function getNonRentalReservations(): Promise<ReservationAll[]> {
  const reservations = await prisma.reserve.findMany({
    where: {
      isRenatal: false,
    },
    select: {
      starttime: true,
      finishtime: true,
      room_number: true,
      author_id: true,
    },
  });

  return reservations.map((reservation) => ({
    starttime: reservation.starttime,
    finishtime: reservation.finishtime,
    room_number: reservation.room_number,
    author: reservation.author_id,
  }));
}
export async function toggleIsRental(id: number): Promise<void> {
  try {
    const reservation = await prisma.reserve.findUnique({
      where: { id },
      select: { isRenatal: true },
    });

    if (reservation?.isRenatal == false) {
      await prisma.reserve.update({
        where: { id },
        data: { isRenatal: !reservation.isRenatal },
      });
    } else if (reservation?.isRenatal) {
      await prisma.reserve.delete({
        where: { id },
      });
    }
  } catch (error) {
    console.error("Failed to toggle isRental:", error);
    throw error;
  }
}
