import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';


export const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <MdEditNote
          className="edit-icon"
        />
        <IoCloseSharp onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
};
