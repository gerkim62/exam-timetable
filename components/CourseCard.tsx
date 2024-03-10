import { Course } from "@prisma/client";
import React from "react";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

type Props = {
  course: Course;
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-white">{course.title}</h3>
      <div className="flex items-center text-gray-200 mb-2">
        <FaChalkboardTeacher className="mr-2" />
        <p>{course.instructor}</p>
      </div>
      <div className="flex items-center text-gray-200 mb-2">
        <FaCalendarAlt className="mr-2" />
        <p>{course.date}</p>
      </div>
      <div className="flex items-center text-gray-200 mb-2">
        <FaClock className="mr-2" />
        <p>
          {course.startTime} - {course.endTime}
        </p>
      </div>
      <div className="flex items-center text-gray-200 mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <p>
          {course.venue}, {course.building}
        </p>
      </div>
      {/* for the group */}
      <div className="flex items-center text-gray-200 mb-2">
        <FaPeopleGroup className="mr-2" />
        <p>{course.option}</p>
      </div>
    </div>
  );
};

export default CourseCard;
