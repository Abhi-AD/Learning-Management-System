import { Link, useLocation } from "react-router-dom";
import { silderbarmenu } from "../../../contents/silderbarmenu";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="md:col-span-3 bg-white p-6 shadow-lg">
      <ul>
        {silderbarmenu.map((item) => (
          <li key={item.path} className="mb-4">
            <Link
              to={item.path}
              className={`text-gray-700 hover:text-blue-500 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
