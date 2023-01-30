import React from 'react'
import Browse from './Browse'

export default function Browsemain() {
  return (
    <>
    <div className='browse-main'>
        <div className='catagory-main-heading'>
        <h1>ⓢⓒⓡⓞⓛⓛ</h1>
        </div>
        
        <h1 className='catagory-heading'>Action</h1>
        <Browse
        catagory = {"28"}
        />
        <h1 className='catagory-heading'>Adventure</h1>
        <Browse
        catagory = {"12"}
        />
        <h1 className='catagory-heading'>Animation</h1>
        <Browse
        catagory = {"16"}
        />
        <h1 className='catagory-heading'>Comedy</h1>
        <Browse
        catagory = {"35"}
        />
        <h1 className='catagory-heading'>Crime</h1>
        <Browse
        catagory = {"80"}
        />
    </div>
    </>
  )
}
