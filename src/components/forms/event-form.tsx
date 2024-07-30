"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
     Form,
     FormControl,
     FormDescription,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { EventFormSchema } from "@/schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";

export function EventForm() {
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
          toast({
               title: "You submitted the following values:",
               description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                         <code className="text-white">
                              {JSON.stringify(data, null, 2)}
                         </code>
                    </pre>
               ),
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
                                                       <RadioGroupItem value="08-08-2024" />
                                                  </FormControl>
                                                  <FormLabel className="font-normal">
                                                       August 8, 2024 at 6:00 PM
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
                    <Button type="submit">Submit</Button>
               </form>
          </Form>
     );
}
