import React from 'react';
import MovieList from '../components/movies/MovieList';
import { useMovies } from '../hooks/movieDb';

const MovieContainer = () =>{
   
    const {movies, loading} = useMovies()
    
    if(loading)return <h1>Loading...</h1>
    else return (
        <>
            <MovieList movies={movies}/>
        </>
    )
}

export default MovieContainer;