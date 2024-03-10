import React from "react";
import prisma from "@/libs/prisma";
import CourseCard from "@/components/CourseCard";
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
  searchParams: {
    course_codes: string;
  };
};

const page = async ({ searchParams: { course_codes } }: Props) => {
  const codes = course_codes
    .split(",")
    .map((code) => code.trim().toUpperCase());

  const courses = await prisma.course.findMany({
    where: {
      code: {
        in: codes,
      },
    },
  });

  console.log(courses);
  return (
    <div className="min-h-screen bg-gradient-to-br  from-purple-400 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Your Exam Timetable
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
