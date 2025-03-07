import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";
export function ApproachPage() {
  return (
    <MainBodyContent>
      <h1>{PAGES_CONFIG.approach.title}</h1>
    </MainBodyContent>
  );
}
