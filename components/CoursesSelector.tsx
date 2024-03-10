"use client";

import { Course } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Select, { MultiValue } from "react-select";
import CustomLink from "./CustomLink";

type Props = {
  courses: Course[];
};

const CoursesSelector = ({ courses }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [selectedCourseCodes, setSelectedCourseCodes] = useState<string[]>([]);

  const handleChange = (
    selectedOptions: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    setSelectedCourseCodes(selectedOptions.map((option) => option.value));
  };

  return (
    <>
      <Select
        onFocus={() => startTransition(() => {})}
        onInputChange={() => startTransition(() => {})}
        isLoading={isPending}
        // end of optimization
        isClearable={false}
        isMulti
        options={courses.map((course) => ({
          value: course.code,
          label: `${course.code} - ${course.title} (${course.instructor})`,
        }))}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Instructor name, course code, or title..."
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "2px solid #d1d5db",
            borderRadius: "0.375rem",
            color: "white",
            "&:hover": {
              borderColor: "#d1d5db",
            },
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#d1d5db",
            color: "black",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "black",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: "black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#d1d5db" : "transparent",
            color: "black",
            "&:hover": {
              backgroundColor: "#d1d5db",
            },
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "#d1d5db",
            color: "black",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "black",
          }),
        }}
      />
      <div className="flex justify-center mt-6">
        <CustomLink
          onClick={(e) => {
            if (selectedCourseCodes.length === 0) {
              e.preventDefault();
              alert("You haven't selected any courses yet!");
            }
          }}
          prefetch={false}
          href={`/timetable/courses/view?course_codes=${encodeURIComponent(
            selectedCourseCodes.join(",")
          )}`}
          className="px-6 py-3 bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-md hover:from-purple-500 rounded  hover:to-pink-400 transition duration-300 ease-in-out flex items-center justify-center"
        >
          View Timetable <FaArrowRight className="ml-4" />
        </CustomLink>
      </div>
    </>
  );
};

export default CoursesSelector;
