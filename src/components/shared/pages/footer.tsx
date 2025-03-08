const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 h-fit">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} MySite. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="/privacy" className="hover:text-gray-400">
              Privacy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
