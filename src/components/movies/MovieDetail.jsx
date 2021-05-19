import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/movieDbApi';
import Movie from './Movie';

const MovieDetail = () =>{
    const history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        (async () =>{
            const movieData = await fetchMovieDetails(id);
            setMovie(movieData);
            setLoading(false)
        })()
    }, [])
    
    if(loading) return <h1>Loading..</h1>
    else return <Movie {...movie}/>
}

export default MovieDetail;