import { RegistrationAdminNotificationTemplate } from "@/components/emails/registration-admin-notification";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
     const body = await req.json();
     console.log({ body });
     try {
          const { data, error } = await resend.emails.send({
               from: "Bildove  Team <support@bildovefinancialservices.com>",
               reply_to: "bildovefinancial@gmail.com",
               to: ["ap.oyeniran@gmail.com", "bildovefinancial@gmail.com"],
               subject: "New Registration!",
               react: RegistrationAdminNotificationTemplate(body),
          });

          if (error) {
               console.log({ error });
               return NextResponse.json({ error }, { status: 500 });
          }

          return NextResponse.json(data);
     } catch (error) {
          console.log({ error });
          return NextResponse.json({ error }, { status: 500 });
     }
}
