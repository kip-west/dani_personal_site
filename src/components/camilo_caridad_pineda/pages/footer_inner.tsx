import { PAGES_CONFIG } from "@/components/camilo_caridad_pineda/constants/pages";

const CURRENT_YEAR = new Date().getFullYear();

export function FooterInner() {
  return (
    <>
      <p>&copy; {CURRENT_YEAR} All rights reserved.</p>
      <ul className="flex justify-center space-x-6 mt-4">
        <li>
          <a
            href={PAGES_CONFIG.pageConfig.contact.href}
            className="hover:text-[#050609]"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
