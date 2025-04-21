import { ContactFormContainer } from "./contact_form/contact_form_container";

export function ContactPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 max-w-[1000px] mx-auto text-center">
      <h1>Contact</h1>
      <ContactFormContainer />
    </div>
  );
}
