"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { register } from "@/actions/register";
import { Button } from "@/components/ui/button";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";
import { EventFormSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export function EventForm() {
     const router = useRouter();
     const [isPending, startTransition] = useTransition();

     const form = useForm<z.infer<typeof EventFormSchema>>({
          resolver: zodResolver(EventFormSchema),
          mode: "onChange",
          defaultValues: {
               email: "",
               firstName: "",
               guestNames: "",
               lastName: "",
               phone: "",
               textReminder: "yes",
               eventToAttend: "",
          },
     });

     function onSubmit(data: z.infer<typeof EventFormSchema>) {
          startTransition(() => {
               register(data)
                    .then((data) => {
                         if (data?.error) {
                              toast.error(data.error, {
                                   duration: 7000,
                              });
                         }
                         if (data?.success) {
                              toast.success(data.success, {
                                   description: `A message has been sent to you at ${data.metadata.registration.email}`,
                                   duration: 7000,
                              });
                              router.push("/event/thank-you");
                         }
                    })
                    .catch((error) => {
                         toast.error("Something went wrong!!!", {
                              duration: 7000,
                         });
                    });
          });
     }

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-3"
               >
                    <div className="">
                         <h3 className="text-lg font-semibold text-yellow-500">
                              Register today!!!
                         </h3>
                         <h4 className="">Event to Attend</h4>
                    </div>
                    <FormField
                         control={form.control}
                         name="eventToAttend"
                         render={({ field }) => (
                              <FormItem className="">
                                   <FormControl>
                                        <RadioGroup
                                             onValueChange={field.onChange}
                                             defaultValue={field.value}
                                             className="flex flex-col space-y-1"
                                        >
                                             <FormItem className="flex items-center space-x-3 space-y-0">
                                                  <FormControl>
                                                       <RadioGroupItem value="2024-10-27" />
                                                  </FormControl>
                                                  <FormLabel className="font-normal">
                                                       October 27, 2024 at 11:00
                                                       PM EST
                                                  </FormLabel>
                                             </FormItem>
                                        </RadioGroup>
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="firstName"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Input
                                             placeholder="First Name"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="lastName"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Input
                                             placeholder="Last Name"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Input
                                             placeholder="Email Address"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="phone"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Input
                                             placeholder="Phone Number"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="noOfAttendees"
                         render={({ field }) => (
                              <FormItem>
                                   <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                   >
                                        <FormControl>
                                             <SelectTrigger>
                                                  <SelectValue placeholder="Number of Attendees" />
                                             </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                             <SelectItem value="1">
                                                  1
                                             </SelectItem>
                                             <SelectItem value="2">
                                                  2
                                             </SelectItem>
                                        </SelectContent>
                                   </Select>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="guestNames"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Input
                                             placeholder="Guest Name"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="eventToAttend"
                         render={({ field }) => (
                              <FormItem className="space-y-3">
                                   <FormLabel className="text-left">
                                        Would you like to receive text message
                                        reminders for this event?
                                   </FormLabel>
                                   <FormControl>
                                        <RadioGroup
                                             onValueChange={field.onChange}
                                             defaultValue={field.value}
                                             className="flex flex-col space-y-1"
                                        >
                                             <FormItem className="flex items-center space-x-3 space-y-0">
                                                  <FormControl>
                                                       <RadioGroupItem value="yes" />
                                                  </FormControl>
                                                  <FormLabel className="font-normal">
                                                       Yes
                                                  </FormLabel>
                                             </FormItem>
                                             <FormItem className="flex items-center space-x-3 space-y-0">
                                                  <FormControl>
                                                       <RadioGroupItem value="no" />
                                                  </FormControl>
                                                  <FormLabel className="font-normal">
                                                       No
                                                  </FormLabel>
                                             </FormItem>
                                        </RadioGroup>
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <Button disabled={isPending} type="submit">
                         {isPending ? (
                              <Loader className="h-4 w-4 animate-spin" />
                         ) : (
                              "Register"
                         )}
                    </Button>
               </form>
          </Form>
     );
}
