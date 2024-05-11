/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  const oldTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(oldTheme);
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const dropdownRef = useRef(null);

  const { pathname } = useLocation();

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

  

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDashboardClicked(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle menu open/close
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  //Function to handle dashboard click

  const handleDashboardClick = () =>{
    setIsDashboardClicked(!isDashboardClicked);
  }

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
    <div className="fixed bg-white dark:bg-dark_bg dark:text-white w-full top-0 left-0 py-4 px-2 max-h-20 z-10 border-b border-gray dark:border-white/10  select-none">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center">
        <div>
          <Link to={"/"} className="font-bold text-2xl">
            <span className="">Medi</span><span className="text-dark_button">Care</span>
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center mx-4 gap-5">
            <Link
              to={"/"}
              className={`py-2 px-3 text-black dark:text-white rounded-lg ${
                pathname === "/" ? "bg-gray-800 text-white" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to={"/services"}
              className={`py-2 px-3 text-black dark:text-white rounded-lg ${
                pathname === "/services" ? "bg-gray-800 text-white" : ""
              }`}
            >
              Services
            </Link>

            {user && (
              <div ref={dropdownRef} className="relative">
                <div onClick={handleDashboardClick} className=" px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer hover:text-white flex items-center gap-1">
                  Dashboard{" "}
                  <span>
                    <svg
                      class="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                {isDashboardClicked && <div onClick={()=>setIsDashboardClicked(false)} className="dropdown flex flex-col absolute bg-[#0d1426] text-nowrap top-12 w-40 border border-1 border-gray-500 rounded-lg overflow-hidden">
                  <Link
                    className="p-2 hover:bg-gray-800 text-white"
                    to={"/add-service"}
                  >
                    Add Service
                  </Link>
                  <Link
                    className="p-2 hover:bg-gray-800 text-white "
                    to={"/manage-service"}
                  >
                    Manage Service
                  </Link>

                  <Link
                    className="p-2 hover:bg-gray-800 text-white "
                    to={"/booked-services"}
                  >
                    Booked Service
                  </Link>
                  <Link
                    className="p-2 hover:bg-gray-800 text-white "
                    to={"/service-to-do"}
                  >
                    Service To Do
                  </Link>
                </div>}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div>
              {theme === "dark" ? (
                <svg
                  className="cursor-pointer text-yellow-500"
                  onClick={toggleTheme}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>
              ) : (
                <svg
                  className="cursor-pointer"
                  onClick={toggleTheme}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                </svg>
              )}
            </div>
            {!user ? (
              <Link
                className="py-2 px-[20px] bg-black dark:bg-dark_button text-white rounded-full"
                to={"/login"}
              >
                {loading ? "Athenticating.." : "Login"}
              </Link>
            ) : (
              <>
              <div
                className="rounded-full size-10 overflow-hidden"
              >
                <img className="rounded-full cursor-pointer" src={user?.photoURL} alt="" />
              </div>

              <button
                onClick={handleSignOut}
                className="py-2 px-[20px] bg-black dark:bg-dark_button text-white rounded-full cursor-pointer"
              >
                Logout
              </button>
              </>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
