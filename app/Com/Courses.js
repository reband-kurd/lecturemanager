"use client";
import React from "react";
import { Courses } from "./dars";
// Ensure you import the Book icon

export default function Course() {
  const renderIframe = (url) => {
    return (
      <iframe
        className="w-full h-48"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold dark:text-gray-300 text-indigo-800 pt-4 mb-8 text-center">
          Courses
        </h1>
      </div>
      <div className="flex flex-row custom-scrollbar overflow-x-auto lg:overflow-x-scroll overflow-y-hidden p-4 justify-start items-center gap-3 lg:gap-4">
        {Courses.map((course, index) => (
          <div
            key={index}
            className="dark:bg-gray-600 min-w-36 max-w-36 lg:min-w-64 lg:max-w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {renderIframe(course.url)}
            <div className="p-4">
              <h2 className="dark:text-gray-200 text-gray-600 text-lg font-semibold mb-2 truncate">
                {course.title}
              </h2>
              <div className="flex dark:text-gray-400 items-center text-indigo-600">
                <span>View lectures</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
