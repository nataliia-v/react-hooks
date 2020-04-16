import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4'

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currentTodo.text){
            dispatch({type: UPDATE_TODO, payload: todo})
        } else {
            const response = await axios.post("https://hooks-api-gamma.now.sh/todos", { id: uuidv4(), text: todo, complete: false});
            dispatch({type: ADD_TODO, payload: response.data})
        }

        setTodo("")
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input value={todo} type="text" className="border-black border-solid border-2" onChange={(event)=> setTodo(event.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    );
};
