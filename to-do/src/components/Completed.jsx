import React from 'react'

const Completed = () => {
  return (
    <form className='card'>
        <h1>TO-DO LIST</h1>
        <div className="input-box">
            <input 
              type="text" 
              placeholder='Enter a task'
              value="something is here"
              required
              />
            <button type="submit">
              <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    </form>
  )
}

export default  Completed