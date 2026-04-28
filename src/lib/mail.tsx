import { RegistrationAdminNotificationTemplate } from "@/components/emails/registration-admin-notification";
import { RegistrationUserNotificationTemplate } from "@/components/emails/registration-user-notification";
import { EventFormSchema } from "@/schema";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "edge";

export const revalidate = 0;

const getResend = () => {
     const apiKey = process.env.RESEND_API_KEY;
     if (!apiKey) throw new Error("RESEND_API_KEY not configured");
     return new Resend(apiKey);
};

export const sendAdminNotificationMail = async (
     data: Partial<z.infer<typeof EventFormSchema>>,
) => {
     getResend().emails.send({
          from: "Bildove  Team <support@bildovefinancialservices.com>",
          replyTo: "bildovefinancial@gmail.com",
          to: ["ap.oyeniran@gmail.com", "bildovefinancial@gmail.com"],
          subject: "New Registration!",
          react: <RegistrationAdminNotificationTemplate {...data} />,
     });
};
export const sendUserNotificationMail = async (
     data: Partial<z.infer<typeof EventFormSchema>>,
) => {
     getResend().emails.send({
          from: "Bildove Team <support@bildovefinancialservices.com>",
          replyTo: "bildovefinancial@gmail.com",
          to: data.email!,
          subject: "Registration Successful!",
          react: <RegistrationUserNotificationTemplate {...data} />,
     });
};
