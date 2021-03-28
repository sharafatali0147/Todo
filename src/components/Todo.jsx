import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Todo = () => {
    const { id } = useParams();
    const [todoDetails, setTodoDetails] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((result) => {
                const responseTodo = result.data;
                setTodoDetails(responseTodo);
            });
    }, [])
    
    const { id: todID, userId, title, completed } = todoDetails || {};
    return (
        <div>
            <div>
                <h1>Todo id: {todID}</h1>
                <h1>Todo User ID: {userId} </h1>
                <h1>Todo title: {title}</h1>
                <h1>Todo Completed: { completed } </h1>
            </div>
        </div>
    )
}

export default Todo
