import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieDbApi';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async ()=>{
                const movies = await fetchMovies(page);
                setMovies(movies);
                setLoading(false)
        })()
    }, []);

    return { movies, loading };
};
