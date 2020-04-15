import React, { useContext, useReducer } from 'react';

import {TodosContext} from "../../context";


export default function ToDoList () {

    const { state } = useContext(TodosContext);
    return (
        <div>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}><span>{todo.text}</span></li>
                ))}
            </ul>

        </div>
    )
}
