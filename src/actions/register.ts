"use server";

import { z } from "zod";
import axios from "axios";

import { EventFormSchema } from "@/schema";
import prisma from "../lib/db";
import {
     sendAdminNotificationMail,
     sendUserNotificationMail,
} from "@/lib/mail";
import { getRegistrationByEmail } from "@/data/registration";
import { APP_URL } from "@/lib/consts";

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
          const sendAdminMail = await axios.post(
               `${APP_URL}/api/send/admin`,
               data,
          );
          const sendUserMail = await axios.post(
               `${APP_URL}/api/send/user`,
               data,
          );

          console.log("Admin", sendAdminMail.status);
          console.log("User", sendUserMail.status);

          return {
               success: `registration successful`,
               metadata: {
                    registration: registrationData,
               },
          };
     } catch (error) {
          console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD", { error });
          return { error: `Something went wrong` };
     }
};
