import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Silderbar } from "../../import";
const FavCourse = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 h-screen bg-gray-100">
        {/* Sidebar */}
        <Silderbar />

        {/* Main Content */}
        <div className="md:col-span-9 p-8">
          <h2 className="text-xl font-semibold mb-6">Fav Courses</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Pip Development
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Link to={"/"}>Suraj Kumar</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button className="text-red-500 hover:text-red-700">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavCourse;
