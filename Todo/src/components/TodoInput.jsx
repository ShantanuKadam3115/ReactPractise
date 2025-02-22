import React, { useState } from 'react'

export default function TodoInput(props) {
  
    let {addTodo, todoValue, setTodoValue} = props

  return (
    <header>
      <input 
      type="text"
      placeholder='Enter todo...'
      value={todoValue}
      onChange={(e) => {setTodoValue(e.target.value)  
      }}
       />
      <button onClick={() => {addTodo(todoValue) 
      setTodoValue('')}
      }>Add</button>
    </header>
  )
}
