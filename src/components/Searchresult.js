import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
export default function Searchresult(props) {
    let [query,setQuery] = useState([])
    let baseImageurl = "https://image.tmdb.org/t/p/original"
    let queryUrl = "https://api.themoviedb.org/3/search/movie?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US&page=1&include_adult=false&query="
    let finalQuery = `${queryUrl}${props.query}`
    useEffect(() => {
        axios.get(finalQuery).then((responce) => { setQuery(responce.data.results)})
    }, [props.query])
  return (
    <>
    <div className='search-heading'><h2>Search Results for: {props.query}</h2></div>
    <div className='search-results'>
    {
       query.map((e, i) => {
        
        return (
            <Moviecard key={i}
                title={e.title?e.title:e.original_name}
                releaseDate={e.release_date?e.release_date:e.first_air_date}
                rating={e.vote_average}
                imgUrl={`${baseImageurl}${e.poster_path}`} 
                id={e.id}
                />
        )
       })
      }

    </div>
      
    </>
  )
}
