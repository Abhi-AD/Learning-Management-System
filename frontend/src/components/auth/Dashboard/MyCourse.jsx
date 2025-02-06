import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Silderbar } from "../../import";
const MyCourse = () => {
  const courses = Array.from({ length: 50 }, (_, index) => ({
    name: `Course ${index + 1}`,
    createdBy: `User ${index + 1}`,
  }));
  return (
    <div className="container">
      <div className="min-h-screen grid grid-cols-12  ">
        {/* Sidebar - Full Width on Mobile, 3/12 on Medium+ Screens */}
        <Silderbar />
        {/* Main Content */}
        <main className="col-span-12 md:col-span-9 p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            My Course
          </h2>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Scrollable Table for Small Screens */}
            <div className="overflow-x-auto ">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-50">
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Created By</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {course.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <Link
                          to={"/"}
                          className="text-blue-600 hover:underline"
                        >
                          {course.createdBy}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm text-red-500">
                        <button className="hover:text-red-700">
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyCourse;
