import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler, FormProvider } from "react-hook-form";
import {
  getContactFormInitialValues,
  type ContactFormSchema,
  contactFormSchema,
} from "./contact_form_schema";
import { ContactForm } from "./contact_form";

export function ContactFormContainer() {
  const formMethods = useForm<ContactFormSchema>({
    defaultValues: getContactFormInitialValues(),
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = (values) => {
    console.log(values);
  };

  return (
    <FormProvider {...formMethods}>
      <ContactForm onSubmit={formMethods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
