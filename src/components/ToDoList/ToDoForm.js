import React, {useContext, useEffect, useState} from 'react';

import {TodosContext} from "../../context";
import { ADD_TODO, UPDATE_TODO } from '../../constsnts';


export const ToDoForm = () => {
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        } else {
            setTodo("")
        }
    }, [currentTodo.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        currentTodo.text ? dispatch({type: UPDATE_TODO, payload: todo}) : dispatch({type: ADD_TODO, payload: todo})

        setTodo("")
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input value={todo} type="text" className="border-black border-solid border-2" onChange={(event)=> setTodo(event.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    );
};
