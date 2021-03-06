
import {
    TOGGLE_TODO,
    REMOVE_TODO,
    ADD_TODO,
    UPDATE_TODO,
    SET_CURRENT_TODO,
    GET_TODOS
} from './constsnts';

export const todosReducer = (state, action) => {

    switch (action.type) {

        case ADD_TODO:
            // if (!action.payload || state.todos.findIndex(todo => todo.text === action.payload) > -1) {
            //     return state
            // }

            const addedTodos = [...state.todos, action.payload];

            return {
                ...state,
                todos: addedTodos
            };

        case TOGGLE_TODO:
            const toggledTodos = state.todos.map(
                todo => todo.id === action.payload.id
                    ? action.payload
                    : todo
            );
            return {
               ...state,
               todos: toggledTodos
            };
        case REMOVE_TODO:
            const filteredTodos = state.todos.filter(
                todo => todo.id !== action.payload.id
            );
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            };
        case SET_CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            };
        case UPDATE_TODO:
            // if (!action.payload || state.todos.findIndex(todo => todo.text === action.payload) > -1) {
            //     return state
            // }
            const updatedTodo = { ...action.payload };
            const updatedTodoIndex = state.todos.findIndex(todo => todo.id === state.currentTodo.id);
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ];
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            };

        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state
    }
};
