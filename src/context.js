import React from "react";

export const TodosContext = React.createContext({
    todos: [
        { id: 1, text: "Eat breakfast", complete: false },
        { id: 2, text: "Do laundry", complete: true },
        { id: 3, text: "Finish project", complete: false },
    ],
    currentTodo: {}
});

// deployed url
// https://hooks-api-gamma.now.sh/todos
