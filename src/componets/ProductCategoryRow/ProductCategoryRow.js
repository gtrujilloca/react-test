import React from 'react'
import './productCategory.css'

const ProductCategoryRow = ({category = ""}) => {
  return (
    <tr >
      <th colSpan="2" className="category">{category}</th>
    </tr>
  )
}

export default ProductCategoryRow
