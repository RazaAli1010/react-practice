import React from 'react'
import Card from './components/Card'

const App = () => {
  const user="Raza Ali"
  return (
    <div>
      <Card user={user} text={`Hello my name is ${user}`}/>
      <Card user={user} text={`Hello my name is ${user}`}/>
    </div>
  )
}

export default App
