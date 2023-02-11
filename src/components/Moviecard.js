import React from 'react'
import { Link } from 'react-router-dom'

export default function Moviecard(props) {
  return (
    <>
      <Link to={{
        pathname: `/Movie/${props.id}`,
        state: {
          id: props.id
        }
      }}>
        
      <div className='card movie-card'>
        <img src={props.imgUrl} className="card-img" alt="Oppss!! No Preview Available"/>
          <div className="card-img-overlay">
            <h5 className="card-title"><b>{props.title}</b></h5>
            <p className="card-text">Released: {props.releaseDate}</p>
            <p className="card-text"><small>Rating: {props.rating}</small></p>
          </div>
      </div>
      </Link>
    </>
  )
}
