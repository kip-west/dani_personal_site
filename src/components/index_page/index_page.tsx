import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";
export function IndexPage() {
  return (
    <MainBodyContent>
      <h1>{PAGES_CONFIG.index.title}</h1>
    </MainBodyContent>
  );
}
