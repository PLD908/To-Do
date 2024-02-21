import React from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
    setInput("");
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
              />
            <button type="submit"><i class="fa-solid fa-plus"></i></button>
        </div>
    </form>
  )
}

export default Form