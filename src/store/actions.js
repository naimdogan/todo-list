
import axios from "../axios/axios";
import { TODO_STARTED, TODO_ERROR, ADD_TODO, TODO_LIST, TOGGLE_TODO, DELETE_TODO, ACTIVE_TODO, COMPLETE_TODO, ALL_TODO } from './types';

const apiUrl ="/todos";

export const getAllTodos = () => {
    return (dispatch)  => {
    dispatch({
        type: TODO_STARTED
    });

    return axios.get(apiUrl)
        .then(response => dispatch({
            type: TODO_LIST,
            payload: response.data
        }))
         .catch(error => dispatch({
             type: TODO_ERROR,
             payload: error
         }));
    }
};

export const addTodoAction = (todo) => {
    return (dispatch)  => {
    dispatch({
        type: TODO_STARTED
    });
    return axios.post(apiUrl, todo)
    .then(response => {
        dispatch({
            type: ADD_TODO,
            payload: response.data
        })
    })
     .catch(error => dispatch({
         type: TODO_ERROR,
         payload: error
     }));
    }
};


export const toggleTodoAction = (todoID, todo) => {
    return (dispatch)  => {
    dispatch({
        type: TODO_STARTED
    });
    return axios.put(`${apiUrl}/${todoID}`, todo)
    .then(response => {
        console.log(response);
        dispatch({
            type: TOGGLE_TODO,
            payload: response.data
        })
    })
     .catch(error => dispatch({
         type: TODO_ERROR,
         payload: error
     }));
    }
};


 export const deleteTodoAction = (todoID) => {
     return (dispatch)  => {
     dispatch({
         type: TODO_STARTED
     });
     return axios.delete(`${apiUrl}/${todoID}`)
         .then(response => dispatch({
             type: DELETE_TODO,
             payload: {
                todoID
             }
         }))
          .catch(error => dispatch({
              type: TODO_ERROR,
              payload: error
          }));
     }
 };

 export const allTodos = (todos) => ({
    type: ALL_TODO,
    todos
});

 export const activeTodos = (todos) => ({
    type: ACTIVE_TODO,
    todos
});

export const completeTodos = (todos) => ({
    type: COMPLETE_TODO,
    todos
});