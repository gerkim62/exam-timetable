import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";

function TimetableUploadedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  from-purple-400 to-pink-600 text-white">
      <div className="max-w-md w-full bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Timetable Successfully Uploaded!
        </h2>
        <p className="text-lg mb-6 text-center">
          You can now proceed to select your courses.
        </p>
        <div className="flex justify-center">
          <Link
            href="/timetable/courses/select"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-md hover:from-purple-500 rounded  hover:to-pink-400 transition duration-300 ease-in-out"
          >
            Select Courses <FaArrowRight className="ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TimetableUploadedPage;
