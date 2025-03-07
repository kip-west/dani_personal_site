import { MainBodyContent } from "../shared/main_body_content";
import { PAGES_CONFIG } from "@/constants/pages";

export function FeesPage() {
  return (
    <MainBodyContent title={PAGES_CONFIG.fees.title}>
      <div>
        <p>
          I believe that the best way to help you is to understand your
          situation and goals.
        </p>
      </div>
    </MainBodyContent>
  );
}
