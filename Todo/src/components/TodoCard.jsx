import React from "react";

export default function TodoCard(props){
    
    let {children, deleteTodo, index, updateTodo } = props


    return(
        <>
        <li className='todoItem' >{children}  
            <div className="actionsContainer">
                <button
                data-testid='Delete'
                onClick={()=>{updateTodo(index)}}>   
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>

                <button 
                data-testid = 'Update'
                onClick={()=>{deleteTodo(index)}}>
                    <i class="fa-solid fa-trash-can" ></i>
                </button>
            </div>
        </li>
        </>
    )
}