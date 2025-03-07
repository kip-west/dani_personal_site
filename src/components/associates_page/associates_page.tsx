import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";

export function AssociatesPage() {
  return (
    <MainBodyContent>
      <h1>{PAGES_CONFIG.associates.title}</h1>
    </MainBodyContent>
  );
}
