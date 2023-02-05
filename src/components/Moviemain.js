import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Moviemain(props) {

    const [res, setRes] = useState([])
    const [cata, setCata] = useState([])
    const [lang, setLang] = useState([])
    const [company, getCompany] = useState([])


    var apikey = "?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US"
    var baselink = "https://api.themoviedb.org/3/movie/"
    var link = `${baselink}${props.name}${apikey}`

    useEffect(() => {
        axios.get(link).then((responce) => {
            setRes(responce.data)
            setCata(responce.data.genres)
            setLang(responce.data.spoken_languages)
            getCompany(responce.data.production_companies)
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
                                cata.map((e) => {
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
                <div className='bottom-info-lang'>
                    <h4>Languages Avaialable:</h4>
                    <div className='group-flex'>
                        {
                            lang.map((e, k) => {
                                return (
                                    <p key={k} className='mx-1'>{e.english_name}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bottom-info-company'>
                    <h4>Production Companies:</h4>
                    <div className='group-flex'>
                        {
                            company.map((e, k) => {
                                return (
                                    e.logo_path ? <img className='company-logo my-3' src={`${posterSmlink}${e.logo_path}`} key={k}></img> : <p>{e.name}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bottom-info-links'>
                    <h2>GOTO:</h2>
                    <div className='bottom-link-btn'>
                        <h4>Visit Homepage:</h4>
                        <a className='btn btn-light button-link' href={res.homepage} target="_blank" rel="noopener noreferrer">Homepage</a>
                    </div>
                    <div className='bottom-link-btn'>
                        <h4>Visit IMDB:</h4>
                        <a className='btn btn-light button-link' href={`${"https://www.imdb.com/title/"}${res.imdb_id}`} target="_blank" rel="noopener noreferrer">IMDB</a>
                    </div>
                </div>
            </div>
        </>
    )
}
