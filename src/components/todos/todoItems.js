import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, toggleTodoAction, deleteTodoAction, activeTodos, completeTodos, allTodos } from '../../store/actions';

const TodoItems = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos, []);

    // const getVisibleTodos = (todos, filter) => {
    //   switch (filter) {
    //     case allTodos:
    //       return todos
    //     case completeTodos:
    //       return todos.filter(t => t.completed)
    //     case activeTodos:
    //       return todos.filter(t => !t.completed)
    //     default:
    //       throw new Error('Unknown filter: ' + filter)
    //   }
    // }

    // const mapStateToProps = state => ({
    //   todos: getVisibleTodos(state.todos, state.visibilityFilter)
    // })
    const toggleTodo = (todoID, todo) => {
        todo.isComplete = todo.isComplete ? false : true;
        dispatch(toggleTodoAction(todoID, todo));
    };

    
    const deleteTodo = (todoID) => dispatch(deleteTodoAction(todoID));
     const allTodo = () => dispatch(allTodos(todos));
     const activeTodo = () => dispatch(activeTodos(todos));
     const completeTodo = () => dispatch(completeTodos(todos));


    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
      
  <div>
    <div>
      <button onClick={allTodo}>Tümü</button>
      <button onClick={activeTodo}>Aktif</button>
      <button onClick={completeTodo}>Tamamlanan</button>
  </div>
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