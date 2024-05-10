import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

// Import your light and dark mode images here
import light from "../../assets/light-on-black-sun-symbol-21618.svg";
import dark from "../../assets/light-on-sun-black-outline-21617.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const oldTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(oldTheme);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };


  // Set the theme on mount and theme change
  useEffect(() => {
    const oldTheme = localStorage.getItem("theme");
    console.log(oldTheme);
    document.documentElement.setAttribute("class", oldTheme);
  }, [theme]);

  // Function to handle menu open/close
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Function to handle user sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="fixed bg-[#f2f3f8] dark:bg-gray-800 dark:text-white w-full top-0 left-0 py-4 px-2 font_worksans max-h-20 z-10">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img
              className="w-32"
              src="https://learnwithsumit.com/_next/static/media/lws-logo-light.ae7b3c3a.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center mx-4">
            {user && (
              <div className="relative">
                <div className="mx-4 cursor-pointer">Dashboard</div>
                <div className="flex flex-col absolute bg-green-200 text-nowrap top-12">
                  <Link
                    className="p-2 bg-white border border-b dark:bg-black dark:text-white"
                    to={"/add-service"}
                  >
                    Add Service
                  </Link>
                  
                </div>
              </div>
            )}
            <Link
              to={"/services"}
              className="py-2 px-3 text-black rounded-lg"
            >
              Services
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img
                className="size-5 cursor-pointer"
                src={theme === "dark" ? dark : light}
                alt=""
                onClick={toggleTheme} />
            </div>
            {!user ? (
              <Link
                className="py-2 px-[20px] bg-black dark:bg-cyan-300 text-white rounded-full"
                to={"/login"}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="py-2 px-[20px] bg-black dark:bg-cyan-400 text-white rounded-full cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
