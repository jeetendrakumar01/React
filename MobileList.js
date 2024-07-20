import React, { useState } from 'react'
import './MobileList.css'
const App= () =>{
  
const [count,setCount]=useState(0);
console.log(count)
console.log(setCount)

const handleClick = () => {
setCount(count+1);
}

const handleClickk = () => {
  setCount(count-1);
  }

  return (
    <div className='main'>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickk}>-</button>
    </div>
  )
}
export default App
