import React from "react";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center transition duration-500">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4 animate-pulse" />

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Thank You!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-md transition duration-500">
        Your message has been successfully sent. I appreciate your interest and
        will get back to you as soon as possible.
      </p>

      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition transform hover:scale-105"
      >
        Back to Home
      </a>
    </div>
  );
}
