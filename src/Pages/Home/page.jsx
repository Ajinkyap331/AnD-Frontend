import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-row flex-wrap items-center justify-center gap-4">
      <Link
        to="/create"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        Create New Description
      </Link>
      <Link
        to="/list"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        Description List
      </Link>
      <Link
        to="/update"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        Update Description List
      </Link>
      <Link
        to="/company"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        Company
      </Link>
    </div>
  );
};

export default Home;
