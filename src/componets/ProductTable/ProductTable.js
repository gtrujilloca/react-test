import React from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({sportings=[], electronics=[]}) => {
  return (sportings.length) <= 0 ?
    <h1>No hay datos</h1> :
    (
      <table border="1">
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
          <ProductCategoryRow category="Sporting Goods"/>
          {
            sportings.map((sporting,index) => {
              return <ProductRow 
                key   = {index + 's'}
                name  = {sporting.name}
                price = {sporting.price}
              />
            })
          }
          <ProductCategoryRow category="Electronics"/>
          {
            electronics.map((sporting,index) => {
              return <ProductRow 
                key   = {index + 's'}
                name  = {sporting.name}
                price = {sporting.price}
              />
            })
          }
        </tbody>
      </table>
    )
}

export default ProductTable
