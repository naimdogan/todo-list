import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, toggleTodoAction, deleteTodoAction } from '../../store/actions';

const TodoItems = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos, []);
    const toggleTodo = (todoID, todo) => {
        todo.isComplete = todo.isComplete ? false : true;
        dispatch(toggleTodoAction(todoID, todo));
    };
    const deleteTodo = (todoID) => dispatch(deleteTodoAction(todoID));
    
     useEffect(() => {
         dispatch(getAllTodos());
     }, [dispatch]);
    return (

    <div>
        <ul className="todo-list">
            {todos.map(todo => (
                <li className={`todo-listItem ${todo.isComplete ? '-isCompleted' : ""}`} key={todo.id}>
                    <span className="todo-itemName">{todo.name} - {todo.isComplete ? "aktif" : "pasif"}</span>
                    <div className="todo-options">
                        <button className="todo-completeBtn" onClick={ e => { e.preventDefault(); toggleTodo(todo.id, todo) }}>{todo.isComplete ? 'geri al' : "tamam"}</button>
                        <button className="todo-deleteBtn" onClick={deleteTodo.bind(todo.id, todo.id)}>sil</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default TodoItems;