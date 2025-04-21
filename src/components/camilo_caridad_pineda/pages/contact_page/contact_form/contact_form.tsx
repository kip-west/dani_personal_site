import { Form, useFormContext } from "react-hook-form";
import type { ContactFormSchema } from "./contact_form_schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type ContactFormProps = {
  onSubmit(): void;
};

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { register } = useFormContext<ContactFormSchema>();

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <FormField
          {...register("firstName")}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                type="text"
                {...field}
                className="border-2 border-gray-300 rounded-md p-2 ml-1"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          {...register("lastName")}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                type="text"
                {...field}
                className="border-2 border-gray-300 rounded-md p-2 ml-1"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          {...register("email")}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                {...field}
                className="border-2 border-gray-300 rounded-md p-2 ml-1"
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        {...register("message")}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              {...field}
              className="border-2 border-gray-300 rounded-md p-2 ml-1"
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
