import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
           <div className="top">
            <div className="pic">
              <img src={props.url} alt="" />
            </div>
            <button>Save</button>
           </div>
           
           <div className="center">
            <h3>{props.name} <span>{props.date}</span></h3>
            <h3>{props.role}</h3>
           </div>
           <div className="bottom"></div>
        </div>
  )
}

export default Card
