import { EventFormSchema } from "@/schema";
import * as React from "react";
import { z } from "zod";

type RegistrationAdminNotificationTemplateProps = Partial<
     z.infer<typeof EventFormSchema>
>;

export const RegistrationAdminNotificationTemplate: React.FC<
     Readonly<RegistrationAdminNotificationTemplateProps>
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
          <h1>
               {firstName} just registered for {eventToAttend}!
          </h1>
          <h2>Email = {email}!</h2>
     </div>
);
