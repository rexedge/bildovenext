import { RegistrationUserNotificationTemplate } from "@/components/emails/registration-user-notification";
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
     try {
          const { data, error } = await resend.emails.send({
               from: "Bildove Team <support@bildovefinancialservices.com>",
               replyTo: "bildovefinancial@gmail.com",
               to: body.email,
               subject: "Registration Successful!",
               react: <RegistrationUserNotificationTemplate {...body} />,
          });

          if (error) {
               return NextResponse.json({ error }, { status: 500 });
          }

          return NextResponse.json(data);
     } catch (error) {
          return NextResponse.json({ error }, { status: 500 });
     }
}
