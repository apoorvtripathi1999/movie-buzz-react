import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Moviecard from './Moviecard'

export default function Browse(props) {
  
  const [data,setData]= useState([])
  let catagoryId = props.catagory
  let baseImageurl = "https://image.tmdb.org/t/p/original"
  let baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres="
  let urlCata = `${baseUrl}${catagoryId}`
  console.log(urlCata)
  useEffect(()=>{
    axios.get(urlCata).then((responce)=>{setData(responce.data.results)})
  },[urlCata])
  console.log(data)
  return (
    <>
    {
      <div className='main-display'>
        {
          data.map((e,i)=>{
            return (
              <Moviecard key= {i} 
              title = {e.title}
              releaseDate = {e.release_date}
              rating = {e.vote_average}
              imgUrl = {`${baseImageurl}${e.backdrop_path}`}
              />
            )
          })
        }
      </div>
      
    } 
    </>
  )
}
