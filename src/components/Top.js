import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'

export default function Top(props) {
    let [type, setType] = useState([])
    let baseImageurl = "https://image.tmdb.org/t/p/original"
    let typeUrl = "?api_key=921345714956c7d9c3db36ac3f20ee09&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
    let typeFinal = `${props.type}${typeUrl}`
    useEffect(() => {
        axios.get(typeFinal).then((responce) => { setType(responce.data.results) })
    }, [props.type])
    return (
        <>
            <div className='top-titles-main'>
                <h2 className='top-heading'>Top {props.name}</h2>
                    <div className='top-titles'>
                        {
                            type.map((e, i) => {

                                return (
                                    <Moviecard key={i}
                                        title={e.title?e.title:e.original_name}
                                        releaseDate={e.release_date?e.release_date:e.first_air_date}
                                        rating={e.vote_average}
                                        imgUrl={`${baseImageurl}${e.backdrop_path}`?`${baseImageurl}${e.backdrop_path}`:null} />
                                )
                            })
                        }
                    </div>
            </div>
        </>
    )
}