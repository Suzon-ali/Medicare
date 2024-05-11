import { Link } from "react-router-dom";
import playStore from "../../assets/playstore.webp";
import appStore from "../../assets/appstore.png";

function Footer() {
  return (
    <footer className="bg-blue-100/20 dark:bg-dark_bg text-black dark:text-white/50 px-4 py-8 mt-10 border-white/10 border-t">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-black dark:text-white">Medi</span>
              <span className="text-dark_button">Care</span>
            </h2>
            <p className="text-gray-400 dark:text-white/60">
              123 Maple Avenue
              <br />
              Cityville, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: contact@medicare.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="">
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
                <Link to="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Download App</h3>
            <div>
              <img
                className="w-40 mb-1 cursor-pointer"
                src={playStore}
                alt="playStore"
              />
              <img
                className="w-40 cursor-pointer"
                src={appStore}
                alt="playStore"
              />
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} MediCare. All rights reserved.
          </p>
          <p className="mt-2">Designed by Sujon Ali</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
