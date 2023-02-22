import React, { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { MdEditNote, MdDone } from 'react-icons/md';

export const TodoItem = ({ todo, removeTodo, completeTodo, updateTodo }) => {
    const { isComplete, id, text } = todo
    const [isEditing, setIsEditing] = useState(false)
    const handleDone = () => {
        setIsEditing(false)
        updateTodo(id, editTextInputRef.current.value)
    }
    const editTextInputRef = useRef(null)
    
    return (
        <div className={isComplete ? 'todo-row complete' : 'todo-row'}>
            {isEditing ? <input ref={editTextInputRef} defaultValue={text} className="edit-todo-input"></input> 
                       : <div onClick={() => completeTodo(id)}>
                {text}
            </div>}
            <div className="icons">
                {isEditing ? < MdDone className="done-icon" onClick={() => handleDone()} /> : <MdEditNote className="edit-icon" onClick={() => setIsEditing(true)}
                />}
                <IoCloseSharp onClick={() => removeTodo(id)} className="delete-icon" />
            </div>
        </div>
    )
}