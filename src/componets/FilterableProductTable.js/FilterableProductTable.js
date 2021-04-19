import React from 'react'
import ProductTable from '../ProductTable/ProductTable'
import Searchbar from '../SearchBar/Searchbar'

const FilterableProductTable = () => {
  const sportings = [
    {name: 'Football', price: '$49.99'},
    {name: 'Baseball', price: '$9.99'},
    {name: 'Basketball', price: '$29.99'},
  ]
  const electronics = [
    {name: 'iPod Touch', price: '$99.99'},
    {name: 'iPhone 5', price: '$399.99'},
    {name: 'Nexus 7', price: '$199.99'},
  ]
  return (
    <>
      <Searchbar />
      <ProductTable sportings={sportings} electronics={electronics}/>
    </>
  )
}

export default FilterableProductTable
