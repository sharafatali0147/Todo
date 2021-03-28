import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {CircularProgress} from "@material-ui/core"
import TodoCard from './TodoCard';

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responsTodos = res.data;
            setTodos(responsTodos);
        })
    }, [])

    console.log("todos", todos);
    

    return (
        <>
            {todos ? (
                <div style={{display: 'flex', flex: "wrap"}}>
                    {todos.slice(190, 200).map((todo) => <TodoCard onTodo={todo} />) }
                </div>
            ) : (
                <CircularProgress />
            )}
            
        </>
    )
}

export default Todos
