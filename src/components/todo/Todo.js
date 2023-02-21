import React, {useState} from 'react'
import { TodoForm } from '../todoForm'
import {IoCloseSharp} from 'react-icons/io5'


export const Todo = ({todos, completeTodo, removeTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <IoCloseSharp 
          onClick={()=> removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ))
} 
