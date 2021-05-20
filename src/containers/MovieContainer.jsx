import React from 'react';
import MovieList from '../components/movies/MovieList';
import { useMovies } from '../hooks/movieDb';

const MovieContainer = () =>{
    const {
        movies,
        loading,
        page, 
        setPage, 
        handleNextClick,
        handlePreviousClick
        } = useMovies();

    if(loading)return <h1>Loading...</h1>
    else return (
        <>
            <button onClick={handlePreviousClick}>&#9756;</button>
            <span>{page}</span>
            <button onClick={handleNextClick}>&#9758;</button>
            <MovieList movies={movies}/>
        </>
    )
}
  
export default MovieContainer;