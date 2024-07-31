"use server";

import { z } from "zod";

import { EventFormSchema } from "@/schema";
import prisma from "../lib/db";
import {
     sendAdminNotificationMail,
     sendUserNotificationMail,
} from "@/lib/mail";
import { getRegistrationByEmail } from "@/data/registration";

export const register = async (formData: z.infer<typeof EventFormSchema>) => {
     const validatedFields = EventFormSchema.safeParse(formData);

     if (!validatedFields.success) {
          return { error: "Invalid Fields" };
     }

     const data = validatedFields.data;

     const existingRegistration = await getRegistrationByEmail(data.email);

     if (existingRegistration) return { error: "You already registered" };

     try {
          const registrationData = await prisma.registration.create({
               data,
          });
          await sendUserNotificationMail(data);
          await sendAdminNotificationMail(data);
          console.log({ registrationData });
          return {
               success: `registration successful`,
               metadata: {
                    registration: registrationData,
               },
          };
     } catch (error) {
          return { error: `Something went wrong` };
     }
};
