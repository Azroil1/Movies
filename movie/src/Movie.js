import React from "react";
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_column">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">{genres.map((genre ,index) =>{
                return <li className="genres_genre">{index}. {genre}</li> })}</ul>
            <p className="movie_summary">{summary}</p>
        </div>

    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;