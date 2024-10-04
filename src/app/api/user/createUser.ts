"use server";
import prisma from "@/lib/prismaclient";

async function createUser(mail: string) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: "y220018",
      },
    });

    if (existingUser) {
      if (existingUser?.mail !== mail) {
        await prisma.user.update({
          where: {
            id: "y220018",
          },
          data: {
            mail: mail,
          },
        });
      }
      return existingUser;
    }

    // If user does not exist, create a new one

    const user = await prisma.user.create({
      data: {
        id: "y220018",
        mail: mail,
      },
    });

    return user;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
}

export default createUser;
