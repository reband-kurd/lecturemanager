import React from "react";
import Link from "next/link";
import { Book } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen to-indigo-100 p-3 dark:bg-gray-700">
      <h1 className="text-4xl font-bold dark:text-gray-300 text-indigo-800 pt-4 mb-8 text-center">
        Discord Channel
      </h1>
      <div className="flex justify-center mb-8">
        <iframe
          src="https://e.widgetbot.io/channels/1291770778752122950/1291770780098756731"
          allow="clipboard-write; fullscreen"
          className="border border-gray-300 rounded-lg shadow-lg w-screen h-screen" // Add styling for better presentation
        ></iframe>
      </div>
    </div>
  );
}
