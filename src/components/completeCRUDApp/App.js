import React, { useContext } from 'react';

import Navbar from "./Navbar";

import { UserContext } from '../../index'

import './index.css';

export default function Application () {

    const value = useContext(UserContext);

    return (
        <div>
            <h2>Hello, {value.username}</h2>
            <Navbar/>
        </div>
    )
}
