import React, { useEffect, useState } from 'react'
import './Banner.css'
import  axios  from '../axios'
import requests from '../Requests'

const Banner = () => {

    const [movie,setMovie] = useState([]);

    useEffect(()=>
    {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )

            return request;
        }
        fetchData();
    },[])

    
    console.log(movie)
    const truncate = (string, n) =>
    {
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    }
  return (
    <>
    <header className="banner"
    style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize : "cover",
        backgroundPosition : "center top",
        backgroundRepeat : "no-repeat"
    }}
    >
        <div className="bannerContents">
            <h1>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="bannerButtons">
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
            </div>
            <div className="bannerDescription">
                {truncate(movie?.overview,200)}
            </div>
        </div>

        <div className="bannerFadeBottom"></div>
    </header>
    </>
  )
}

export default Banner;