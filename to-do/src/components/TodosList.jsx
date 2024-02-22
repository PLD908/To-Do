import React from 'react'

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleCompleted = (todo) => {
        setTodos((prevTodos) => {
          const updatedTodos = prevTodos.map((item) => {
            if (item.id === todo.id) {
              return { ...item, completed: !item.completed };
            }
            return item;
          });
    
          // Move completed task to the end
          const completedTask = updatedTodos.find((task) => task.id === todo.id);
          updatedTodos.splice(updatedTodos.indexOf(completedTask), 1);
          updatedTodos.push(completedTask);
    
          return updatedTodos;
        });
      };

    const handleEditTodo = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

  return (
    <div>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
                <div className="icons">
                    <button type="button" onClick={()=> handleCompleted(todo)}>
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                    <button type="button" onClick={() => handleEditTodo(todo)}>
                        <i className="fa-solid fa-edit"></i>
                    </button>
                    <button type="button" onClick={() => handleDelete(todo)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodosList