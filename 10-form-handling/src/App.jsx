import { useState } from "react";


const App = () => {

  const [text, setText]=useState('')
   
  const formHandler=(e)=>{
    e.preventDefault()
    setText('')
    
  }



  return (
    <>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>

        <input style={{color:"black"}} value={text} onChange={(e)=> (setText(e.target.value))} type="text" placeholder='Enter Value' />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
