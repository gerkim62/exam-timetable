import Link from "next/link";
import React from "react";

import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-400 to-purple-500 min-h-screen flex flex-col  items-center text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Personal Exam Timetable Viewer
      </h1>
      <p className="text-lg text-center mb-8">
        Welcome! This tool allows you to view your personal exam timetable with
        ease.
      </p>
      <div className="flex flex-col items-center mb-8">
        <Link
          href="/timetable/courses/select"
          className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg text-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
        >
          Select Your Courses Now <FaArrowRight className="inline ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
