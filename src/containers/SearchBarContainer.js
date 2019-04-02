
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import styled from 'styled-components';

const SearchBarContainer = ({ dispatch }) => {
  let textInput

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!textInput.value.trim()) {
            return
          }
          dispatch(addTodo(textInput.value))
          textInput.value = ''
        }}
      >
        <input ref={node => (textInput = node)} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default connect()(SearchBarContainer)