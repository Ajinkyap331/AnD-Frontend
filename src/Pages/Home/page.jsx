import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-row flex-wrap items-center justify-center gap-4">
      <Link to="/create">Create New Description</Link>
      <Link to="/list">Description List</Link>
      <Link to="/company">Company</Link>
    </div>
  );
};

export default Home;
