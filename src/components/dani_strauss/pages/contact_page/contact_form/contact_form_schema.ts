import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First Name is required")
    .max(100, "First Name is too long"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last Name is required")
    .max(100, "Last Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(100, "Email is too long")
    .email("Email is invalid."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message is too long"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function getContactFormInitialValues(): ContactFormSchema {
  return {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
}
