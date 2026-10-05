import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const arr=[{
    name:"Amazon",
    role:"Senior UI/UX Analyst",
    date:"5 days ago",
    url:"https://images.icon-icons.com/2699/PNG/512/amazon_logo_icon_169611.png"
  },{
    name:"Amazon",
    role:"Software Engineer II",
    date:"5 days ago",
    url:"https://images.icon-icons.com/2699/PNG/512/amazon_logo_icon_169611.png"
  }]
  return (
    <>
      <div className='parent'>
        {
          arr.map(
            function(elem, idx){
              return <Card 
                key={idx}
                name={elem.name}
                role={elem.role}
                date={elem.date}
                url={elem.url}
              />

            }
        )}
      </div>
    </>
  )
}

export default App
