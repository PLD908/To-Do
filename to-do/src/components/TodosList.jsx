import React from 'react'

const TodosList = ({ todos, setTodos }) => {
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className='list' onChange={(event) => event.preventDefault()} />
                <div className="icons">
                    <button type="button">
                        <i class="fa-solid fa-bookmark"></i>
                    </button>
                    <button type="button">
                        <i class="fa-solid fa-edit"></i>
                    </button>
                    <button type="button">
                        <i class="fa-solid fa-trash-can" onClick={handleDelete(todo)}></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodosList