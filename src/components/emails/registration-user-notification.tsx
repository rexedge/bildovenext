import { EventFormSchema } from "@/schema";
import { COMPANY_PROFILE } from "@/utils/const";
import * as React from "react";
import { z } from "zod";

type RegistrationUserNotificationTemplateProps = Partial<
     z.infer<typeof EventFormSchema>
>;

export const RegistrationUserNotificationTemplate: React.FC<
     Readonly<RegistrationUserNotificationTemplateProps>
> = ({
     firstName,
     email,
     eventToAttend,
     guestNames,
     lastName,
     noOfAttendees,
     phone,
     textReminder,
}) => (
     <div>
          <p>
               Hi {firstName} {lastName},
          </p>
          <p>
               We&apos;re excited to have you registered for Financial
               Empowerment Live Workshop on September 14 at 12:00PM EST!
          </p>
          <p>
               We will send you a reminder a few days before the event to
               confirm your attendance. Please be sure to check your email for
               this important message.
          </p>
          <p>
               An event agent will also be in touch shortly to answer any
               questions you may have and provide further details.
          </p>
          <p>We look forward to seeing you there!</p>
          <p>Best regards,</p>
          <p></p>
          <p></p>
          <p>Bildove Financial Service</p>
          <p>{COMPANY_PROFILE.phone}</p>
     </div>
);
