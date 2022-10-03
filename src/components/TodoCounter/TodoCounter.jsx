import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter"> You finished {completed}/{total} TODOs </h2>
    );
}

export {TodoCounter};