import React, { useEffect, useState } from 'react'

function useLocalStorage(key, intialValue){
  const [value, setValue]=useState(()=>{
    try{
    const saved=localStorage.getItem(key)
    return saved? JSON.parse(saved): intialValue
  }catch{
    return intialValue
  }})

  useEffect(()=>{
    try{
      localStorage.setItem(key, JSON.stringify(value))
    }catch{
      console.error("saved failed")
    }
  }, [key, value])

  return [value, setValue]
}

const App = () => {
  const [todos, setTodos]= useLocalStorage("todos", [])
  const [text, setText]= useState('')



  const addTodos=()=>{
    if (!text.trim()) return
    setTodos(prev=> [...prev, {id: Date.now(), text, done: false}])
    setText('')
  }

  const toggle=(id) => {
    setTodos(prev => prev.map(t => t.id===id?{...t, done: !t.done}:t))
  }

  const remove=(id) =>{
    setTodos(prev => prev.filter(t => t.id!==id))
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <span>

      </span>
    </>
      
  
  )
}

export default App
