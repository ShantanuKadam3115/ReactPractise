import './index.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function addTodo(addedTodo){
    const newTodo = [...todos, addedTodo]
    setTodos(newTodo)
  }

  function deleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
       return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function updateTodo(index){
    let valueToBeUpdated = todos[index]
    setTodoValue(valueToBeUpdated)
    deleteTodo(index)
  }

  return (
    <>
     <TodoInput addTodo={addTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
     <TodoList todos = {todos} deleteTodo={deleteTodo}  updateTodo={updateTodo}/>
    </>
  )
}

export default App
