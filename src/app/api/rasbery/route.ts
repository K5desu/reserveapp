import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaclient";
import { database } from "@/lib/firebase/firebase";
import { ref, set } from "firebase/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  function writeUserData(userId: string) {
    set(ref(database, "users"), {
      userId: userId,
    });
  }
  if (req.method === "POST") {
    // Handle POST request
    const createdData = writeUserData(req.body.userId);
    res.status(200).json(createdData);
  } else {
    res.status(400).json({ message: "Method Not Allowed" });
  }
  if (req.method === "GET") {
    // Handle GET request
    const data = await prisma.user.findMany();
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
