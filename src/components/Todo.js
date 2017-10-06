import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, complete, title }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: complete ? 'line-through' : 'none'
    }}
  >
    {title}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo
