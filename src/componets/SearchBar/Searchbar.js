import React from 'react'

const Searchbar = () => {
  return (
    <div>
      <input placeholder="Search..."/>
      <br/>
      <input type="checkbox" id="check"/>
      <label for="check">Only show products in stock</label>
    </div>
  )
}

export default Searchbar
