import { RegistrationAdminNotificationTemplate } from "@/components/emails/registration-admin-notification";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
     const apiKey = process.env.RESEND_API_KEY;
     if (!apiKey) {
          return NextResponse.json(
               { error: "Email service not configured" },
               { status: 500 },
          );
     }
     const resend = new Resend(apiKey);
     const body = await req.json();
     console.log({ body });
     try {
          const { data, error } = await resend.emails.send({
               from: "Bildove  Team <support@bildovefinancialservices.com>",
               replyTo: "bildovefinancial@gmail.com",
               to: ["ap.oyeniran@gmail.com", "bildovefinancial@gmail.com"],
               subject: "New Registration!",
               react: <RegistrationAdminNotificationTemplate {...body} />,
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
