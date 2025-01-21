import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const increase = () => {

    if (count >= 20) {
      count = 20
      setCount(count)
    }else{
    count = count + 1
     setCount(count)
    }
    

  }

  const decrease = () => {
    if (count <= 0) {
      count = 0
      setCount(count)
    } else {
      count = count - 1
      setCount(count) 
    }

  }



  return (
    <>
      <div>
        <p>Counter : {count}</p>
        <button onClick={increase}>Increase</button>
        <br />
        <button onClick={decrease}>Decrease</button>
      </div>
      
    </>
  )
}

export default App
