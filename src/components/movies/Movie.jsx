import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({image, title, description}) => (
    <figure>
        <img src={image} alt={title}/>
        <figcaption>
            <p>{title}</p>
            <p>{description}</p>
        </figcaption>
    </figure>
)
Movie.proptypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Movie;
