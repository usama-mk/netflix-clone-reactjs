import React, { useEffect, useState } from 'react'
import axios from '../axios.js';
import './Row.css'


const base_url= "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    return (
        <div className="row" >
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map((movie)=>{
             return <img key={movie.id} className="row__poster" src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
            })}
            </div>
        </div>
    )
}

export default Row
