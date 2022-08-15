import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('Completed task: ' + props.text)
    }

    const onDelete = () => {
        alert('Deleted task: ' + props.text)
    }

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            > ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {props.text} </p>
            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            >X
            </span>
        </li>
    );
}

export { TodoItem };