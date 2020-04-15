import React, { useContext, useReducer}  from 'react';

import ToDoList from './components/ToDoList/ToDoList'
import { TodosContext } from './context';
import { todosReducer } from './reducer';


// import AxiosRequests from './components/requests/AxiosRequests';
// import Login from './components/start/Login';
// import RegisterForm from './components/start/RegisterForm';


export default function App () {

    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, initialState);

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            <ToDoList/>
        </TodosContext.Provider>
    )
};
