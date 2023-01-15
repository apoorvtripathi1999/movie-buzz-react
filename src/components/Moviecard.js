import React from 'react'

export default function Moviecard(props) {
  return (
    <>
      <div className='card movie-card '>
        <img src={props.imgUrl} className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.releaseDate}</p>
            <p className="card-text"><small>{props.rating}</small></p>
          </div>
      </div>
    </>
  )
}
