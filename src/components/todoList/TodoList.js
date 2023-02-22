import React from 'react';
import { TodoItem } from '../todoItem'

export const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  return todos.map(todo => (
    <TodoItem 
      todo={todo} 
      key={todo.id} 
      removeTodo={removeTodo} 
      completeTodo={completeTodo} 
      updateTodo={updateTodo} 
    />
  ));
};
