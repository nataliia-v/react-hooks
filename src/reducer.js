import { TOGGLE_TODO } from './constsnts';

export const todosReducer = (state, action) => {

    switch (action.type) {

        case TOGGLE_TODO:
            const toggledTodos = state.todos.map(
                todo => todo.id === action.payload.id
                    ? { ...action.payload, complete: !action.payload.complete }
                    : todo
            );
            return {
               ...state,
               todos: toggledTodos
            };
        default:
            return state
    }
};
