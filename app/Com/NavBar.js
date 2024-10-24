import React from "react";
import ThemeToggle from "./TogleTheme";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/Home"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              <h2>Lecture Manager</h2>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link
              href="/about"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              <h2>About</h2>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
