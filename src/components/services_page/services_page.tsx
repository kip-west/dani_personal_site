import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";

export function ServicesPage() {
  return (
    <MainBodyContent>
      <h1>{PAGES_CONFIG.services.title}</h1>
    </MainBodyContent>
  );
}
