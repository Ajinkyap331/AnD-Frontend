import React from "react";

function Companies({ ratingValue, companies }) {
  return (
    <div>
      <h4>Rating Value: {ratingValue}</h4>
      <ul>
        {companies.map((company) => (
          <li key={company._id}>
            <p>Company ID: {company.company_id}</p>
            <p>Price: {company.price}</p>
            <p>Discount: {company.discount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Rating = ({ catalogNumber, ratings }) => {
  return (
    <div>
      <h2>Catalog Number: {catalogNumber}</h2>
      {ratings.map((rating) => (
        <Companies
          key={rating._id}
          ratingValue={rating.rating_value}
          companies={rating.companies}
        />
      ))}
    </div>
  );
};

export default Rating;
