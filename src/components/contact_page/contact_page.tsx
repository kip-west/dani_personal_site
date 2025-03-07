import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";

export function ContactPage() {
  return (
    <MainBodyContent>
      <h1>{PAGES_CONFIG.contact.title}</h1>
    </MainBodyContent>
  );
}
