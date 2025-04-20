import { PAGES_CONFIG } from "@/components/dani_strauss/constants/pages";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#DAA49A]/50 text-[#3C0000] py-6 h-fit">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a
              href={PAGES_CONFIG.contact.href}
              className="hover:text-[#050609]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
