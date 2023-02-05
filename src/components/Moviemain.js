import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Moviemain(props) {

    const [res, setRes] = useState([])
    const [cata,setCata] = useState([])

    var apikey = "?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US"
    var baselink = "https://api.themoviedb.org/3/movie/"
    var link = `${baselink}${props.name}${apikey}`

    useEffect(() => {
        axios.get(link).then((responce) => { 
            setRes(responce.data) 
            setCata(responce.data.genres)
        })
    }, [props.name])

    var imgpath = res.backdrop_path
    var poster = `${"https://image.tmdb.org/t/p/original"}${imgpath}`
    var posterSmlink = "https://image.tmdb.org/t/p/original"

    return (
        <>
            <div className='moviemain-main'>
                <div className='poster-image-div'>
                    <img src={poster} alt='No Preview' className='main-image'></img>
                </div>
                <div className='movie-info'>
                    <div className='movie-small-poster'>
                        <img className='poster-img-main' src={`${posterSmlink}${res.poster_path}`}></img>
                    </div>
                    <div className='movie-info-content'>
                        <h1>Title: {res.title}</h1>
                        <p>Rating: Average {res.vote_average} ★ out of {res.vote_count} Votes</p>
                        <p>Runtime: {res.runtime} minutes</p>
                        <p>Released: {res.release_date}</p>
                        <p>Revenue: {res.revenue / 1000000} Mil</p>
                        <div className='catagory-main-movie'>
                                  <p>Genres:</p>
                                 {
                                    cata.map((e)=>{
                                        return (
                                            <p key={e.id}>{e.name}</p>
                                        )
                                    })
                                 } 
                        </div> 
                        <h4 className='synopsis-main'>Synopsis</h4>
                        <p>{res.overview}</p>
                    </div>
                </div>
                <div className='margin-bot'>
                    <h1>chbhbhejjhve</h1>
                </div>
            </div>
        </>
    )
}
