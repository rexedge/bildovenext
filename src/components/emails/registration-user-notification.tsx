import { EventFormSchema } from "@/schema";
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
          <h1>Hi, {firstName}!</h1>
          <p>
               Thank you for registering, one of our agent will get in touch
               with you shortly!
          </p>
     </div>
);
