import {useState, useEffect, useMemo} from 'react'


function debounce(fnc, delay){
    let timer;
    function debounced(...args){
      clearTimeout(timer)
      timer=setTimeout(()=>{
             fnc.apply(this, args)
      },delay)
    }
    debounced.cancel=()=>clearTimeout(timer)
    return debounced
  }

const App = () => {

  const [value, setValue]= useState('')

  const debouncedLog=useMemo(
    () => debounce((text)=> console.log(text), 3000),[]
  )
  

  const handleEvent= (e)=>{
    setValue(e.target.value)
    debouncedLog(e.target.value)
  }



  return (
    <div>
        <input style={{color:"black"}} value={value} onChange={handleEvent} type="text" placeholder='Enter Value' />
    </div>
  )
}

export default App
