import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import {Link} from 'react-router-dom'

const MovieList = ({movies}) =>(
    <ul aria-label="movies">
        {movies.map(movie=>(
            <Link to={`/${movie.id}`} key={movie.id}>
                <li>
                    <Movie {...movie}/>
                </li>
            </Link>
        ))}
    </ul>
);
        
MovieList.proptypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    }))
}
export default MovieList;