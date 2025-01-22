import { useState, useCallback } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password , setPassoword] = useState("")

  //useCallback 

  const Password = () => {
    let passLength = 8
    let pass = ""
    let str = ""
    const addNumbers = true
    const addCharacters = true
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

    if (addNumbers == false && addCharacters == false) {
      pass = str
    }else if (addNumbers == true && addCharacters == false) {
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        // console.log(str, temp,  numbers[num])
        str = replaceCharAt(str, temp, numbers[num])
      }
      pass = str
    }else if(addNumbers == false && addCharacters == true){
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        // console.log(str, temp,  characters[num])
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }else{
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        // console.log(str, temp,  numbers[num])
        str = replaceCharAt(str, temp, numbers[num])
      }
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        // console.log(str, temp,  characters[num])
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }
    
    // console.log(str)
    console.log(pass)
  }
  

  return (
    <>  
    <h1 className="text-3xl font-bold text-center">
      Password Generator 
    </h1>
    <Password/>
    </>
  )
}

export default App
