import { RegistrationUserNotificationTemplate } from "@/components/emails/registration-user-notification";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
     const body = await req.json();
     try {
          const { data, error } = await resend.emails.send({
               from: "Bildove Team <support@bildovefinancialservices.com>",
               reply_to: "bildovefinancial@gmail.com",
               to: body.email,
               subject: "Registration Successful!",
               react: RegistrationUserNotificationTemplate(body),
          });

          if (error) {
               return NextResponse.json({ error }, { status: 500 });
          }

          return NextResponse.json(data);
     } catch (error) {
          return NextResponse.json({ error }, { status: 500 });
     }
}
