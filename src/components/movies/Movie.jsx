import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({image, title, description}) => {
    
    return <figure>
        <img src={image} alt={title}/>
        <figcaption>
            <p data-testid='title'>{title}</p>
            <p>{description || null }</p>
        </figcaption>
    </figure>
}
Movie.proptypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Movie;
