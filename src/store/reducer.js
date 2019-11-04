import { TODO_STARTED, TODO_ERROR, ADD_TODO, TODO_LIST, TOGGLE_TODO, DELETE_TODO } from './types';

export const initialState = {
    loading: false,
    todos: [],
    error: null
  };
    
 export default function reducer(state = initialState, action) {
     switch (action.type) {
         case TODO_STARTED:
            return {
                ...state,
                loading: true
            }
         case TODO_LIST:
                return {
                    ...state,
                    todos: action.payload
                }
        case TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
             return Object.assign({}, state, {
              todos: state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                  return Object.assign({}, todo, {
                    ...action.payload,
                  });
                }
                return todo;
            })
        });
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.todoID)
            }
        default:
            return state;
     }
 }

