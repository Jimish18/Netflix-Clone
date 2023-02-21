import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './Row.css';

const Row = ({title , fetchUrl , isLargeRow = false}) => {

    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>
    {
        async function fetchdata()
        {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchdata();
    },[fetchUrl]);

  return (   

    <div className="Row">

        <h2>{title}</h2>

        <div className="movieContainer">
            {movies.map((movie) =>
                (
                  ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) &&
                  
                  (<img 
                    className={`rowPoster ${isLargeRow && 'rowPosterLarge'}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="movie poster" />)
                ))
            }
        </div>
    </div>
  )
}

export default Row;