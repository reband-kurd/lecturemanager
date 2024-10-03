import React from "react";
import dars from "../Com/dars";
import Link from "next/link";
import { Book } from "lucide-react";
import GoogleDriveSlider from "@/app/Com/mySlider";
export default function HomePage() {
  const renderIframe = (darsakan) => (
    <img
      src={`${darsakan}`}
      className="w-full h-48 sm:h-64 object-cover"
      alt="Lecture poster"
      width={500}
      height={400}
    />
  );

  return (
    <div className="min-h-screen   to-indigo-100 p-8 dark:bg-gray-700">
      <GoogleDriveSlider />
      <h1 className="text-4xl font-bold dark:text-gray-300 text-indigo-800 pt-4 mb-8 text-center">
        CS2 Lecture Materials
      </h1>
      <div className="flex flex-row custom-scrollbar overflow-x-auto lg:overflow-x-scroll overflow-y-hidden p-4 justify-start items-center gap-3 lg:gap-4">
        {dars.map((folder, index) => (
          <Link
            href={{
              pathname: "Lecture",
              query: { index: index },
            }}
            key={index}
            className="dark:bg-gray-600  min-w-36 max-w-36 lg:min-w-64 lg:max-w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {renderIframe(folder.poster)}
            <div className="p-4">
              <h2 className="dark:text-gray-200 text-gray-600  text-lg font-semibold mb-2 truncate">
                {folder.title}
              </h2>
              <div className="flex dark:text-gray-400 items-center text-indigo-600">
                <Book size={24} className="mr-2" />
                <span>View lectures</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Course />
    </div>
  );
}
