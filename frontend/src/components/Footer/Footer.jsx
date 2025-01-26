import { NavbarsLink } from "../../contents/Navbar";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a href="#" className="hover:underline">
              LMS™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {NavbarsLink.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:underline me-4 md:me-6">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
