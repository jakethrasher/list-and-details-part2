import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import {Link} from 'react-router-dom'
import styles from './movies.css'

const MovieList = ({movies}) =>(
    <div className={styles.listContainer}>
        <ul aria-label="movies">
            {movies.map(movie=>(
                <Link 
                    to={`/${movie.id}`} 
                    key={movie.id} 
                    className={styles.linkStyle}>
                    <li>
                        <Movie 
                        image={movie.image} 
                        title={movie.title}/>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
);
        
MovieList.proptypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    }))
}
export default MovieList;
