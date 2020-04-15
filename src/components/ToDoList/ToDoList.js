import React, { useContext } from 'react';

import { TodosContext } from "../../context";
import { TOGGLE_TODO, REMOVE_TODO, SET_CURRENT_TODO } from '../../constsnts';


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
                        <button onClick={()=> dispatch({ type: SET_CURRENT_TODO, payload: todo})}>
                            <img src="https://icon.now.sh/edit/0050c5" alt="Edit icon" className="h-6"/>
                        </button>
                        <button onClick={()=> dispatch({ type: REMOVE_TODO, payload: todo})}>
                            <img src="https://icon.now.sh/delete/8b0000" alt="Delete icon" className="h-6"/>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}
