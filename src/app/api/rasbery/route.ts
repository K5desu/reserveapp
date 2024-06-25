import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaclient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Handle POST request
    const { body } = req;
    const createdData = await prisma.create({ data: body });
    res.status(201).json(createdData);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
