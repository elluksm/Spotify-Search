import React from 'react'

const Item = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

export default Item