import prisma from "@/lib/db";

export const getRegistrationByEmail = async (email: string) => {
     try {
          const registration = await prisma.registration.findUnique({
               where: { email },
          });
          return registration;
     } catch (error) {
          return null;
     }
};
