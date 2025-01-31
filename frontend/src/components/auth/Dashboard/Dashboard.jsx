const Dashboard = () => {
  return (
    <div className="container">
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="bg-white w-64 p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                My Courses
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Favorite Courses
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Recommended courses
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Profile Setting
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Change Password
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-xl font-semibold mb-6">My Courses</h2>
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
                    Suraj Kumar
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
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

export default Dashboard;
