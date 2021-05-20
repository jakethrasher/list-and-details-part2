import React from 'react';
import { useMovie } from '../../hooks/movieDb';

import Movie from './Movie';

const MovieDetail = ({match}) =>{
    const {movie, loading} = useMovie(match)

    if(loading) return <h1>Loading...</h1>
    else return <Movie {...movie}/>
}

export default MovieDetail;