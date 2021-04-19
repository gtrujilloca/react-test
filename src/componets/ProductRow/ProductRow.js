import React from 'react'
import './productRow.css'

const ProductRow = ({name = "",price = ""}) => {
  return (
    <tr >
      <td className="row">{name}</td>
      <td className="row">{price}</td>
    </tr>
  )
}

export default ProductRow
