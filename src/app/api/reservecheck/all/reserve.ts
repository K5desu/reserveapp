"use server";
import prisma from "@/lib/prismaclient";

interface Reservation {
  starttime: string;
  finishtime: string;
  room_number: string;
}
export interface ReservationAll {
  student_id: string;
  time: string;
  name: string;
  id: number;
  status: string;
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
  //  {
  //   name: "2B",
  //   student_id: "123456",
  //   time: "10:00~11:00",
  //   status: "10/3",
  //   id: 100,
  // },

  return reservations.map((reservation) => ({
    starttime: reservation.starttime,
    finishtime: reservation.finishtime,
    room_number: reservation.room_number,
  }));
}
export async function getRentalReservationsByAuthorId(
  authorId: string,
  IsRental: boolean
): Promise<ReservationAll[]> {
  const reservations = await prisma.reserve.findMany({
    where: {
      isRenatal: IsRental,
      author_id: authorId,
    },
    select: {
      date: true,
      id: true,
      starttime: true,
      finishtime: true,
      room_number: true,
      author_id: true,
    },
  });

  return reservations.map((reservation) => ({
    id: reservation.id,
    time: `${reservation.starttime}~${reservation.finishtime}`,
    name: reservation.room_number,
    student_id: reservation.author_id,
    status: reservation.date,
  }));
}

export async function getRentalReservations(
  IsRental: boolean
): Promise<ReservationAll[]> {
  const reservations = await prisma.reserve.findMany({
    where: {
      isRenatal: IsRental,
    },
    select: {
      date: true,
      id: true,
      starttime: true,
      finishtime: true,
      room_number: true,
      author_id: true,
    },
  });

  return reservations.map((reservation) => ({
    id: reservation.id,
    time: `${reservation.starttime}~${reservation.finishtime}`,
    name: reservation.room_number,
    student_id: reservation.author_id,
    status: reservation.date,
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
    throw error;
  }
}
