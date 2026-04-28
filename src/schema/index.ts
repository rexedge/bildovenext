import { z } from "zod";

export const EventFormSchema = z.object({
     firstName: z.string().min(2, {
          message: "Enter valid first name.",
     }),
     lastName: z.string().min(2, {
          message: "Enter valid last name.",
     }),
     email: z.string().email({
          message: "Enter valid email address.",
     }),
     phone: z.string().min(9, {
          message: "phone must be at least 9 characters.",
     }),
     noOfAttendees: z.enum(["1", "2"], {
          required_error: "Select number of attendees.",
     }),
     guestNames: z.string(),
     textReminder: z.enum(["yes", "no"], {
          required_error: "Choose one.",
     }),
     eventToAttend: z.string().min(2, {
          message: "event must be selected.",
     }),
});
