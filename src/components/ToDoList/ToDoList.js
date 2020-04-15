import React, { useContext, useReducer } from 'react';

import { TodosContext } from "../../context";
import { TOGGLE_TODO } from '../../constsnts';


export default function ToDoList () {
    const { state, dispatch } = useContext(TodosContext);

    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!";
    return (
        <div className="container mx-auto max-q-md text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul>
                {state.todos.map(todo => (
                    <li className="bg-orange-dark flex items-center border-black border-dashed border-2 my-2 py-4" key={todo.id}>
                        <span onDoubleClick={()=> dispatch({type: TOGGLE_TODO, payload: todo})} className={`flex-1 ml-12 ${todo.complete && "line-through text-grey-darkest"}`}>{todo.text}</span>
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
