import React, { useState } from 'react'
import { TodoList } from '../../components'
import { AddTodo } from '../../components'

export const TodoScreen = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = text
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }

  return (
    <div>
      <h1>Tell me your plans</h1>
      <AddTodo onSubmit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}
