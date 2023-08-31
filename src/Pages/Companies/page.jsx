import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link to="/ccreate"></Link>
      <Link to="/clist"></Link>
    </div>
  );
};

export default Company;
