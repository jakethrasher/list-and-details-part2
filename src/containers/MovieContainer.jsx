import React from 'react';
import MovieList from '../components/movies/MovieList';
import { useMovies } from '../hooks/movieDb';

const MovieContainer = () =>{
   
    const {movies, loading} = useMovies()
    
    if(loading)return <h1>Loading...</h1>
    else return (
        <>
            <button>&#9756;</button>
            <button>&#9758;</button>
            <MovieList movies={movies}/>
        </>
    )
}

export default MovieContainer;