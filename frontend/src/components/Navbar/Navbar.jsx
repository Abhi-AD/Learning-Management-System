import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons
import { NavbarsLink } from "../../contents/Navbar";
import { useLocation } from "react-router-dom"; // Import useLocation to get current path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="flex flex-wrap items-center justify-between p-4 container">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LMS
          </span>
        </a>

        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavbarsLink.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={`block py-2 px-3 rounded-sm ${
                    location.pathname === item.link
                      ? "text-blue-500" // Apply blue color for the active link
                      : "text-white"
                  } md:p-0`}
                  aria-current={
                    location.pathname === item.link ? "page" : undefined
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
