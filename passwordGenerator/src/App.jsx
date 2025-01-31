import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password , setPassoword] = useState("")
  const passwordRef = useRef(null)

  
  const passwordGenerator = useCallback( () => {
    let passLength = length
    let pass = ""
    let str = ""
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const characters = "!@#$%^&*~<>+"

    function replaceCharAt(str, index, replacement) {
      if (index < 0 || index >= str.length) {
          throw new Error("Index out of bounds");
      }
      return str.slice(0, index) + replacement + str.slice(index + 1);
    }
     
    for (let i = 0; i < passLength; i++) {
      let num = Math.floor(Math.random() * alphabets.length )
      str += alphabets[num]  
    }

    if (isNumAllowed == false && isCharAllowed == false) {
      pass = str
    }else if (isNumAllowed == true && isCharAllowed == false) {
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        str = replaceCharAt(str, temp, numbers[num])
      }
      pass = str
    }else if(isNumAllowed == false && isCharAllowed == true){
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }else{
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        str = replaceCharAt(str, temp, numbers[num])
      }
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }
     setPassoword(pass)
  } , [length , isNumAllowed , isCharAllowed, setPassoword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, isCharAllowed, isNumAllowed, passwordGenerator])
 
  

  return (
    <>  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 py-2 text-red-500 bg-gray-800'>
      <h1 className='text-center text-white my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        placeholder='password'
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyToClipBoard}
        className='outline-none bg-amber-600 text-black px-2 shrink-0'>
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          id='lengthButton'
          type="range"
          min={8}
          max={16}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="lengthButton">Length: {length}</label>
        </div>
        <div className='fles items-center gap-x-2'>
          <input 
          type="checkbox"  
          id="numbersButton"
          className='cursor-pointer'
          value={isNumAllowed}
          onChange={() => setIsNumAllowed((prev)=>!prev)} 
          />
          <label htmlFor="numbersButton">Numbers</label>
        </div>
        <div className='fles items-center gap-x-2'>
          <input 
          type="checkbox"  
          id="charactersButton"
          className='cursor-pointer'
          value={isCharAllowed}
          onChange={ () => setIsCharAllowed((prev)=>!prev)} 
          />
          <label htmlFor="charactersButton">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
