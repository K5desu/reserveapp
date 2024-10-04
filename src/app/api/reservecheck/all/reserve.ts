"use server";
import prisma from "@/lib/prismaclient";

interface Reservation {
  starttime: string;
  finishtime: string;
  room_number: string;
}
interface ReservationAll {
  author: string;
  starttime: string;
  finishtime: string;
  room_number: string;
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
