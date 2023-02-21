import React, {useState, useEffect, useRef} from 'react'

export const AddTodo = ({onSubmit}) => {
  const [input, setInput] = useState('')    
  const [id, setId] = useState(0);
  
  const giveId=()=> {
      setId(id + 1)
      return id;
  }

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  
  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      id: giveId(),
      text: input
    });

    setInput('')
  }

  const handleOnChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleOnChange}
        ref={inputRef}
        autocomplete="off"
      />
      <button 
        className="todo-button">add todo</button>
    </form>
  )
}