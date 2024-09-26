import React from "react";
import dars from "../Com/dars";
import Link from "next/link";
import { Book } from "lucide-react";

export default function HomePage() {
  const renderIframe = (darsakan) => (
    <img
      src={`${darsakan}`}
      className="w-full h-60 object-cover rounded-t-lg"
      alt="Lecture poster"
      width={500}
      height={300}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
        CS Lecture Materials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dars.map((folder, index) => (
          <Link
            href={{
              pathname: "Lecture",
              query: { index: index },
            }}
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            {renderIframe(folder.poster)}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {folder.title}
              </h2>
              <div className="flex items-center text-indigo-600">
                <Book size={24} className="mr-2" />
                <span>View lectures</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
