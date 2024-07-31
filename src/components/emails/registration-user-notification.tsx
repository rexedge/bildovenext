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
          <h1>Welcome, {firstName}!</h1>
          <h2>Email = {email}!</h2>
     </div>
);
