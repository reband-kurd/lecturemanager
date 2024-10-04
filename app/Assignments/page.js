"use client";
import React, { useState, useEffect } from "react";

export default function AssignmentsPage() {
  // Initial assignments (only used if no localStorage data exists)
  const initialAssignments = [
    { id: 1, title: "Multi-Media - Assignment", completed: false },
    { id: 2, title: "OOP - Quiz", completed: false },
  ];

  // State for assignments
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState("");

  // Load assignments from localStorage on component mount
  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    } else {
      setAssignments(initialAssignments);
    }
  }, []);

  // Save assignments to localStorage whenever assignments state changes
  // In the useEffect that loads data
  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    console.log("Loaded from localStorage:", storedAssignments);
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    } else {
      console.log("No stored assignments, using initial assignments");
      setAssignments(initialAssignments);
    }
  }, []);

  // In the useEffect that saves data
  useEffect(() => {
    console.log("Saving to localStorage:", assignments);
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);
  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  // Handle checkbox toggle
  const handleToggle = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  };

  // Handle adding a new assignment
  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.trim()) return;

    const newAssignmentObj = {
      id: Date.now(), // Use timestamp for unique ID
      title: newAssignment.trim(),
      completed: false,
    };

    setAssignments((prevAssignments) => [...prevAssignments, newAssignmentObj]);
    setNewAssignment(""); // Clear the input field
  };

  // Handle removing an assignment
  const handleRemoveAssignment = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== id)
    );
  };

  return (
    <div className="min-h-screen p-5 dark:bg-gray-700">
      <h1 className="text-4xl font-bold dark:text-gray-300 text-indigo-800 text-center mb-8">
        Assignments
      </h1>
      <div className="max-w-lg mx-auto mb-6">
        <form onSubmit={handleAddAssignment} className="flex mb-4">
          <input
            type="text"
            value={newAssignment}
            onChange={(e) => setNewAssignment(e.target.value)}
            placeholder="New assignment..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 rounded-r-lg"
          >
            Add
          </button>
        </form>
      </div>
      <div className="max-w-lg mx-auto">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-lg ${
              assignment.completed
                ? "bg-green-100 dark:bg-green-900"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <span
              className={`text-lg ${
                assignment.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "dark:text-gray-200 text-gray-700"
              }`}
            >
              {assignment.title}
            </span>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={assignment.completed}
                onChange={() => handleToggle(assignment.id)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <button
                onClick={() => handleRemoveAssignment(assignment.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
