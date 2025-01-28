import { HiPlay } from "react-icons/hi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseDetails = () => {
  let { course_id } = useParams();
  return (
    <div className="container mt-3 flex flex-col gap-2">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-2">
        <div className="md:col-span-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBe3aCKZdDJfdiCwyZCfUUXyuyC2nAd44ouw&s"
            alt="Image"
            className="w-full rounded-md"
          />
        </div>
        <div className="md:col-span-8">
          <h3>Course Title {course_id}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum
            libero harum? Voluptatum deserunt a nisi quaerat, accusamus
            architecto nostrum pariatur, dolor excepturi ullam non iusto,
            molestias temporibus atque iste!
          </p>
          <p className="font-bold">
            Course By: <a href="#">Teacher 1</a>
          </p>
          <p className="font-bold">Duration: 3h 30 min</p>
          <p className="font-bold">Total Enrolled: 456 students</p>
          <p className="font-bold">Rating: 4/5</p>
        </div>
      </div>

      <ul className="border border-gray-300 rounded-md shadow-md bg-white">
        <li className="px-4 py-2 bg-gray-100 font-semibold border-b">
          Course Video
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-200 cursor-pointer flex justify-between items-center">
          Introduction
          <button className="rounded-md bg-red-500 px-2 py-1 text-white">
            <HiPlay size={20} />
          </button>
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-200 cursor-pointer flex justify-between items-center">
          Setup Project
          <button className="rounded-md bg-red-500 px-2 py-1 text-white">
            <HiPlay size={20} />
          </button>
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-200 cursor-pointer flex justify-between items-center">
          Start with function
          <button className="rounded-md bg-red-500 px-2 py-1 text-white">
            <HiPlay size={20} />
          </button>
        </li>
      </ul>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl pb-1 mb-4">Related Course</h1>
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
    </div>
  );
};
export default CourseDetails;
