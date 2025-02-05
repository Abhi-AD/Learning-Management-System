import { Silderbar } from "../../import";
const PasswordChange = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 h-screen bg-gray-100">
        {/* Sidebar */}
        <Silderbar />

        {/* Main Content */}
        <div className="md:col-span-9 p-8">
          <h2 className="text-xl font-semibold mb-6">My PasswordChange</h2>
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
    </div>
  );
};

export default PasswordChange;
