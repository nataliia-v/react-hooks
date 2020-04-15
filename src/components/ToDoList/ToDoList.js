import React, { useContext, useReducer } from 'react';

import {TodosContext} from "../../context";


export default function ToDoList () {
    const { state } = useContext(TodosContext);

    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!";
    return (
        <div className="container mx-auto max-q-md text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul>
                {state.todos.map(todo => (
                    <li className="bg-orange-dark flex items-center border-black border-dashed border-2 my-2 py-4" key={todo.id}>
                        <span className="flex-1 ml-12">{todo.text}</span>
                        <button>
                            <img src="https://icon.now.sh/edit/0050c5" alt="Edit icon" className="h-6"/>
                        </button>
                        <button>
                            <img src="https://icon.now.sh/delete/8b0000" alt="Delete icon" className="h-6"/>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}
