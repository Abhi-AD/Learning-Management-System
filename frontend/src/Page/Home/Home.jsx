import { FaArrowRightLong } from "react-icons/fa6";
import { Carousel } from "../../components/import";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl pb-1 mb-4">Latest Course</h1>
          <a href="">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl pb-1 mb-4">Popular Course</h1>
          <a href="">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <Link to="/detail/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Course Title
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl pb-1 mb-4">Teacher Name</h1>
          <a href="">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img className="rounded-t-lg " src="/vite.svg" alt="Image" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-20"
                src="/vite.svg"
                alt="Image"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FaArrowRightLong className="ms-2 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
