
import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4 text-yellow-400">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="text-lg mb-8">
      
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
