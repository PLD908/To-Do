import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      const newTask = { id: uuidv4(), title: input, completed: false };
      setTodos((prevTodos) => [newTask, ...prevTodos]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onFormSubmit(event);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className='card'>
        <h1>TO-DO LIST</h1>
        <div className="input-box">
            <input 
              type="text" 
              placeholder='Enter a task'
              value={input}
              required
              onChange={onInputChange}
              onKeyDown={handleKeyDown}
              />
            <button type="submit">
              {editTodo ? "OK" : <i className="fa-solid fa-plus"></i>}
            </button>
        </div>
    </form>
  )
}

export default Form