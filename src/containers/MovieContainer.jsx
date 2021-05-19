import React, { useState, useEffect } from 'react';
import MovieList from '../components/movies/MovieList';
import { fetchMovies } from '../services/movieDbApi';

const MovieContainer = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async ()=>{
            const movies = await fetchMovies()
            setMovies(movies);
            setLoading(false)
        })()
    }, []);
    
    
    if(loading)return <h1>Loading...</h1>
    else return (
        <>
            <MovieList movies={movies}/>
        </>
    )
}

export default MovieContainer;