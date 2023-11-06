/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const FilteredGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate} Star
        </li>
      ))}
    </ul>
  );
};

export default FilteredGroup;
