import React from 'react';
import AddTodo from "../../components/todos/addTodo"
import TodoItems from "../../components/todos/todoItems"
import './todo.scss'

function Todos(params) {
    return (
        <div className="todo">
            <AddTodo />
            <TodoItems filter={params.filter || 'all'} />
        </div>
    )
}

export default Todos;