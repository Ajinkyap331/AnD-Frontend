import React from "react";
import Rating from "./Rating";

export const Catalog = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.desc}</h1>
      {data.catalog.map((item) => (
        <Rating
          key={item._id}
          catalogNumber={item.catalog_number}
          ratings={item.rating}
        />
      ))}
    </div>
  );
};
