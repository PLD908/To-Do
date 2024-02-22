import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const handleDelete = ({ id, title }) => {
      // Use jsx option to render a custom confirmation toast
      const deleteToast = toast.info(
        <div>
          <p>Are you sure you want to delete "{title}"?</p>
          <button
            className='toast'
            onClick={() => {
              setTodos(todos.filter((todo) => todo.id !== id));
              toast.success('Deleted', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
              toast.dismiss(deleteToast); // Close the confirmation toast after deletion
            }}
          >
            Yes, Delete
          </button>
        </div>,
        {
          position: 'top-center',
          autoClose: false, // Don't automatically close the confirmation toast
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true,
        }
      );
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