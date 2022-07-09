import React from 'react'

const Anecdote = ({text, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Anecdote
