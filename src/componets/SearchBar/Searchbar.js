import React from 'react'
import './search.css'

const Searchbar = () => {
  return (
    <div className="search">
      <input placeholder="Search..."/>
      <br/>
      <input type="checkbox" id="check"/>
      <label for="check">Only show products in stock</label>
    </div>
  )
}

export default Searchbar
