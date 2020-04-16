import React, { useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import ToDoList from './components/ToDoList/ToDoList'
import { ToDoForm } from "./components/ToDoList/ToDoForm";
import { TodosContext } from './context';
import { todosReducer } from './reducer';
import { GET_TODOS } from './constsnts';


// import AxiosRequests from './components/requests/AxiosRequests';
// import Login from './components/start/Login';
// import RegisterForm from './components/start/RegisterForm';

const useAPI = endpoint => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        getData()
    }, []);

    const getData = async () => {
       const response =  await axios.get(endpoint);

        setData(response.data)
    };

    return data
};

export default function App () {

    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, initialState);

    const savedTodos = useAPI("https://hooks-api-gamma.now.sh/todos");

    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: savedTodos
        })
    }, [savedTodos]);

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            <ToDoForm/>
            <ToDoList/>
        </TodosContext.Provider>
    )
};
