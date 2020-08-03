import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <h6>{title}</h6>
      <h6>{year}</h6>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
