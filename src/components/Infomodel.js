import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Infomodel(props) {
    const location = useLocation()
    location = pro
    const { title } = location.state
  return (
    <>
    <div className='main-info' >
    <div className="info">
    <div>
        <h1 className='my-4'>{title}</h1>
    </div>
    </div>
    </div>
    </>
  )
}
//tabindex="-1" aria-labelledby="..." aria-hidden="true"