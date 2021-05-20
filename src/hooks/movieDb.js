import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieDbApi';
import { useParams} from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieDbApi';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    const handleNextClick = () => {
        setPage((page) => page + 1)
    };
    const handlePreviousClick = () => {
        if(page > 1){
            setPage((page) => page - 1)
        }
    }

    useEffect(() => {
        (async ()=>{
                setLoading(true)
                const movies = await fetchMovies(page);
                setMovies(movies);
                setLoading(false)
        })()
        
    }, [page]);
    
    return { movies, loading, page, setPage, handleNextClick, handlePreviousClick };
};

export const useMovie = (match) => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        (async () =>{
            const movieData = await fetchMovieDetails(match.params.id);
            setMovie(movieData);
            setLoading(false)
        })()
    }, [])
    return { movie, loading}
}