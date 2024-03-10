import CoursesSelector from "@/components/CoursesSelector";
import React, { useState } from "react";
import prisma from "@/libs/prisma";

const SelectCourses = async () => {
  const courses = await prisma.course.findMany();

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md w-full bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Select Courses</h2>
        <p className="text-sm mb-6 text-center ">
          Select all your courses to view the exam timetable. Search by
          instructor name, course code, or title.
        </p>
        <CoursesSelector courses={courses} />
      </div>
    </div>
  );
};

export default SelectCourses;
