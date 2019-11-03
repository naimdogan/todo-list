import React from 'react';
import AddTodo from "../../components/todos/addTodo"
import TodoItems from "../../components/todos/todoItems"
import './todo.scss'

function Todos() {
    return (
        <div className="todo">
            <AddTodo />
            <TodoItems />
        </div>
    )
}

export default Todos;