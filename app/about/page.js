import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen to-indigo-100 p-3 dark:bg-gray-700">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-6">
          About This Project
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-4">
            Purpose
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This website serves as a lecture manager for Computer Science
            students in Stage 2 at Salahadin University. It was created to
            streamline access to course materials, enhance the learning
            experience, and provide a centralized platform for CS2 students to
            find and manage their lecture resources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Easy navigation through lecture materials</li>
            <li>Organized course content by topics</li>
            <li>Quick access to lecture posters and related resources</li>
            <li>Responsive design for seamless use on various devices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-4">
            Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This project was developed by Reband Hamadameen, a passionate
            computer science student committed to improving the learning
            experience for fellow students at Salahadin University.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-4">
            Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            To learn more about the developer and explore other projects, visit:
          </p>
          <Link
            href="https://rebandhamadameen.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline"
          >
            rebandhamadameen.tech
            <ExternalLink size={16} className="ml-1" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
