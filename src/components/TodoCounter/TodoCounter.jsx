import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completeTodos}= React.useContext(TodoContext); 
    return(
        <h2 className="TodoCounter"> You finished {completeTodos}/{totalTodos} TODOs </h2>
    );
}

export {TodoCounter};