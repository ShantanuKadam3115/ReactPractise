import { useState } from 'react'

import './App.css'

function App() {
  
const [gPin, setGPin] = useState('')
const [sPin, setSPin] = useState('')
const [country, setCountry] = useState('')

const generatePDF = ()=>{
  console.log('Generate PDF')
  
}

const handleCountryChange = (event) => {
  setCountry(event.target.value)
}

const countries = ['Singapore', 'China', 'Bahamas', 'Honkong']

const handleInput1Change = (event) => {
  setGPin(event.target.value)
}

const handleInput2Change = (event) => {
  setSPin(event.target.value)
}



return (
  <>
  <div className='container'>
    <div className='country-dropdown'>
      <select value={country} onChange={handleCountryChange}>
        <option value="" disabled>Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>

    <div className="Gpin-div">
    <label htmlFor="input1">GPIN : </label>
          <input
            id="input1"
            type="text"
            value={gPin}
            onChange={handleInput1Change}
          />
    </div>

    <div className="Spin-div">
    <label htmlFor="input2">SAP ID: </label>
          <input
            id="input2"
            type="text"
            value={sPin}
             onChange={handleInput2Change}
          />
    </div>  
  </div>
  <div className="generate-pdf">
      <button onClick={generatePDF} >Generate PDF</button>
    </div>
  </>
)


  
}

export default App
