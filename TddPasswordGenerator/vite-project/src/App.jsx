import { useCallback, useState, useRef, useEffect } from 'react'
import Password from './components/Password'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)

  useEffect(() => {
    document.title = 'PassGen';
  }, []);

  const passwordGenerator = useCallback(()=>{
    setPassword(
      Password(length, isNumAllowed, isCharAllowed)
    )
  }, [length, isNumAllowed, isCharAllowed])

  
  
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
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
        <input 
        data-testid='password'
        type="text" 
        value={password}
        placeholder='password'
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyToClipBoard}
        className='outline-none bg-amber-600 text-black px-2 shrink-0 cursor-pointer'>
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
