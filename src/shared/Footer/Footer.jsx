import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-dark_bg text-black dark:text-white/50 px-4 py-8 mt-10 border-white/10 border-t">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                 Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="contact" className="hover:text-gray-400">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 dark:text-white/60">123 Maple Avenue<br />Cityville, State 12345<br />Phone: (123) 456-7890<br />Email: contact@Craftify.com</p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Craftify. All rights reserved.</p>
          <p className="mt-2">Designed by Sujon Ali</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;