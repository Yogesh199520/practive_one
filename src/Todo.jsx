import React from 'react';
const  {useEffect, useState} = React;
const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        mode: 'cors',
    });
    const data = await res.json();
    return data;
};
const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos();
            setTodos(data);
        };
        getTodos();
    }, [setTodos]);
    const boxStyle = {
        width:"50%",
        margin:"0 auto",
        textAlign:"center",
        boxShadow:"box-shadow: 0 0 25px rgba(0, 0, 0, 0.6)",
        backgroundColor: "#85AADD",
        padding:"10px",
    }
    const listStyle = {
        color:"#fff",
        fontSize:"14px",
        borderBottom:"1px solid red",
        padding:"20px 10px 0",
        textAlign:"left",


    }
    return (
        <ul style={boxStyle}>
            {todos.map(todo => {
                return <li key={todo.id} style={listStyle}>
                    {todo.userId}.
                    {todo.title},
                    {todo.completed}
                </li>;
            })}
        </ul>
    );
};
export default Todo;