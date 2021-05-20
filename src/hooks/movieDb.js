import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieDbApi';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async ()=>{
                const movies = await fetchMovies()
                setMovies(movies);
                setLoading(false)
        })()
    }, []);

    return { movies, loading };
};
