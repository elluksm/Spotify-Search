import React from 'react'
import Item from './Item'

const ItemList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Item key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default ItemList