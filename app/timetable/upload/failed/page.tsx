import React from "react";
import CustomLink from "@/components/CustomLink";

import { FaArrowLeft } from "react-icons/fa6";

function ErrorPage({ searchParams }: { searchParams?: { message?: string } }) {
  const errorMessage = searchParams?.message || "An error occurred";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  from-purple-400 to-pink-600 text-white">
      <div className="max-w-md w-full bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Could not upload
        </h2>
        <p className="text-lg mb-4 text-center">{errorMessage}</p>
        <p className="text-xs mb-4 text-center">
          Please go back and try uploading timetable again.
        </p>
        <div className="flex justify-center">
          <CustomLink
            href="/timetable/upload"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-md hover:from-purple-500 rounded  hover:to-pink-400 transition duration-300 ease-in-out"
          >
            <FaArrowLeft className="mr-4" /> Go back
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
