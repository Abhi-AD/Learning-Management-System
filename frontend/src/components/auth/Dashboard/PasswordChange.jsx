import { Silderbar } from "../../import";
const PasswordChange = () => {
  return (
    <div className="container">
      <div className="min-h-screen grid grid-cols-12  ">
        {/* Sidebar - Full Width on Mobile, 3/12 on Medium+ Screens */}
        <Silderbar />
        {/* Main Content */}
        <main className="col-span-12 md:col-span-9 p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            Change Password
          </h2>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Scrollable Table for Small Screens */}
            <div className="overflow-x-auto ">
              <div className="bg-white shadow-md rounded-lg p-2">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter new password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PasswordChange;
