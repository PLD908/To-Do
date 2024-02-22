import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';

const App = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return(
        <div className= "container">
            <Form 
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <TodosList 
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
            />
        </div>
    )
}

export default App