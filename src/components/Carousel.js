import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Carousel() {

  const trendUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=921345714956c7d9c3db36ac3f20ee09"
  const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US"
  const [trend, setTrend] = useState([])
  const [genre,setGenre]= useState([])
  useEffect(() => {
    axios.get(trendUrl).then((responce) => {
      setTrend(responce.data.results)
    })
    axios.get(genreUrl).then((responce)=>{
      setGenre(responce.data.genres)})
  }, [])
  const img = 'https://image.tmdb.org/t/p/original'
  console.log(genre, "trend");
  return (

    <>
      <div className='main-carousel'>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={'https://image.tmdb.org/t/p/original/dlxzUj7z1MqEcFiwvvrj0bvBKDY.jpg'} className="d-block carimage" alt="..." />
              <div className='carousel-caption d-none d-md-block'>
                <div className='caro-dgit init iscription'>
                      <h1>M3GAN</h1>
                      <h3>Rating: 7.035/10</h3>
                </div>
                </div>        
            </div>
            {
              trend.map((e, i) => {
                return (
                  <div className="carousel-item" key={i}>
                    <img
                      src={`${img}${e.backdrop_path}`}
                      className="d-block carimage" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <div className='caro-discription'>
                      <h1>{e.title?e.title:e.name}</h1>
                      <h3>Rating: {e.vote_average}/10</h3>
                      </div>
                      <div className='genre-list'> 
                      {genre.map((a,b)=>{
                        return(
                          <div>
                            { e.genre_ids.includes(a.id)? 
                            <div className='genre'> <h5 className='genre-list-item' key={b}>{a.name}</h5></div> 
                            : null }
                          </div>
                        )
                      })}
                      </div> 
                    </div>
                  </div>


                )
              })
            }


          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

    </>
  )
}