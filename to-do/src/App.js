import React, { useState } from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';

const App = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    return(
        <div className= "container">
            <Form 
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
            />
            <TodosList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default App