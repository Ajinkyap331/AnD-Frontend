import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-4">
      <Link
        to="/ccreate"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        Create Companies
      </Link>
      <Link
        to="/clist"
        className="px-4 py-2 bg-blue-700 rounded text-white hover:bg-blue-500"
      >
        list Companies
      </Link>
    </div>
  );
};

export default Company;
