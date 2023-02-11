import React, { useEffect, useState } from 'react'
import Searchresult from './Searchresult'

export default function Search() {
    let [queryInput,setQueryInput]= useState("")
    let [submit,didSubmit] = useState(false)
    const handleSubmit = (event)=>
    {
    event.preventDefault()
    didSubmit(true)
    }
    
  return (
    <>
    <div className='search-main'>
    <h2>Enter The Name</h2>
    <form className="input-wrapper searchbar" onSubmit={handleSubmit}>
    <input className="input searchbar-input" name="text" placeholder="Type here..." type="text" value={queryInput}
    onChange = {e=>{setQueryInput(e.target.value)}}/>
    </form>
    </div>
    {
        submit?<Searchresult query = {queryInput}/> :null
    }
    </>
  )
}
