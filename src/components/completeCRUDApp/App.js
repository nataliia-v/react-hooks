import React, { useContext, useReducer } from 'react';

import Navbar from "./Navbar";

import { UserContext } from '../../index'

import './index.css';

export const initialState = {
    count: 0,
};

export const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'reset':
            return initialState;
        default:
            return initialState
    }
};

export default function Application () {

    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useContext(UserContext);

    return (
        <div>
            <h2>Hello, {value.username}</h2>
            <div>
                Count: {state.count}
                <button className="border p-1" onClick={()=> dispatch({type: 'increment'})}>increment</button>
                <button className="border p-1" onClick={()=> dispatch({type: 'decrement'})}>decrement</button>
                <button className="border p-1" onClick={()=> dispatch({type: 'reset'})}>reset</button>
            </div>


            <Navbar/>
        </div>
    )
}
