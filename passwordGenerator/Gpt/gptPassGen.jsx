import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    console.time('Password Generation Time');
    
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const characters = "!@#$%^&*~<>+";
    
    let charSet = alphabets;
    if (isNumAllowed) charSet += numbers;
    if (isCharAllowed) charSet += characters;

    let pass = "";
    
    // Ensure at least one number and one special character if allowed
    if (isNumAllowed) pass += numbers[Math.floor(Math.random() * numbers.length)];
    if (isCharAllowed) pass += characters[Math.floor(Math.random() * characters.length)];
    
    // Fill the rest of the password length
    while (pass.length < length) {
      let char = charSet[Math.floor(Math.random() * charSet.length)];
      pass += char;
    }
    
    // Shuffle the password to avoid predictable placement
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');
    
    setPassword(pass);

    console.timeEnd('Password Generation Time');
  }, [isNumAllowed, isCharAllowed, length]);

  return (
    <>  
      <h1 className="text-3xl font-bold text-center">
        Password Generator 
      </h1>
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
    </>
  );
}

// export default App;