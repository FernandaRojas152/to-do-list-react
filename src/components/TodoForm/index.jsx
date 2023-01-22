import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setnewTodoValue] = React.useState('');
    const {addTodos, setOpenModal}= React.useContext(TodoContext);
    const onCancel= ()=>{
        setOpenModal(false);
    }

    const onChange= (event)=>{
        setnewTodoValue(event.target.value);
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
        setnewTodoValue('');
    }

    return (
        <form onSubmit={onSubmit}>
        <label> Write your new Todo</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Estudiar el domingo">

        </textarea>
        <div className="TodoForm-buttonContainer">
            <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                Cancel
            </button>
            <button type="submit" onClick={onSubmit} className="TodoForm-button TodoForm-button--add">
                Create
            </button>
        </div>

        </form>
    );
}

export {TodoForm};