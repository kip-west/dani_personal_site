import { ContactFormContainer } from "./contact_form/contact_form_container";

export function ContactPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 max-w-[1000px] mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">
        I want to hear from you.
      </h1>
      <p className="text-lg sm:text-xl">
        My clients tend to be people in leadership positions, front line
        workers, creatives, and spiritual seekers looking for powerful
        techniques to transform their personal and professional lives.
      </p>
      <ContactFormContainer />
    </div>
  );
}
