import React from 'react'
// import { Link } from 'react-router-dom'

export default function Moviecard(props) {
  return (
    <>
      <div className='card movie-card'>
        <img src={props.imgUrl} className="card-img" alt="Oppss!! No Preview Available"/>
          <div className="card-img-overlay">
            <h5 className="card-title"><b>{props.title}</b></h5>
            <p className="card-text">Released: {props.releaseDate}</p>
            <p className="card-text"><small>Rating: {props.rating}</small></p>
            {/* <Link to={{
             pathname: '/infomodel',
              state: {
                title: props.title,
                poster: props.imgUrl
              }
            }}>Info</Link> */}
          </div>
      </div>
    </>
  )
}
