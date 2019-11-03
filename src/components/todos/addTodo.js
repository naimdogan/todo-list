import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../store/actions';
import uuid from 'uuid/v4';

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch(addTodoAction(todo));


    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') return;

        addTodo({
            id: uuid(),
            name: todo,
            isComplete: false
        });
        setTodo('');
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="todo-add">
                <input className="todo-addInput" type="text"
                    name="todo"
                    placeholder="Yeni görev ekle"
                    value={todo}
                    onChange={onChange}
                />
                <button className="todo-addBtn" type="submit">Ekle</button>
            </div>
        </form>
    )
}

export default AddTodo;