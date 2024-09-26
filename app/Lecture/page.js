"use client";

import React, { Suspense } from "react";
import dars from "../Com/dars";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Wrapper component that uses useSearchParams
function LectureWrapper({ children }) {
  const searchParams = useSearchParams();
  const index = searchParams.get("index");
  const singleLecture = dars[index];

  return children({ singleLecture });
}

// Main content component
function LectureContent({ singleLecture }) {
  if (!singleLecture) {
    return <div>Lecture not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Lecture List
        </Link>

        <h1 className="text-3xl font-bold text-indigo-800 mb-6">
          {singleLecture.title}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${singleLecture.id}#grid`}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="auto"
            className="rounded-lg border border-indigo-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Page component
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LectureWrapper>
        {({ singleLecture }) => (
          <LectureContent singleLecture={singleLecture} />
        )}
      </LectureWrapper>
    </Suspense>
  );
}
