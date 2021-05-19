export const fetchMovies = async () =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_KEY}&language=en-US`)

    const { results }= await res.json();
    return results.map(movie=>({
        id: movie.id,
        image: `http://image.tmdb.org/t/p/w200/${movie.poster_path}`,
        title: movie.original_title,
        description: movie.overview,
    }))
}

export const fetchMovieDetails = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_DATABASE_KEY}&language=en-US`)

    const movie = await res.json();
    return ({
        id: movie.id,
        image:`http://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        title: movie.original_title,
        description: movie.overview,
    })
}

