import React from 'react'

const Card = (props) => {

  return (
    <div id='card'>
        <h1>{props.user}</h1>
        <p>{props.text}</p>
      
    </div>
  )
}

export default Card
