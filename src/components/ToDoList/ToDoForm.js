import React, {useContext, useState} from 'react';

import {TodosContext} from "../../context";
import {ADD_TODO, TOGGLE_TODO} from '../../constsnts';


export const ToDoForm = () => {
    const { dispatch } = useContext(TodosContext);
    const [todo, setTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({type: ADD_TODO, payload: todo});

        setTodo("")
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input value={todo} type="text" className="border-black border-solid border-2" onChange={(event)=> setTodo(event.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    );
};
