import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const { item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed).length;
    let filterTodos = [];

    if (!searchValue.length >= 1) {
        filterTodos = todos;
    } else {
        filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const totalTodos = todos.length;

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodos,
            deleteTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };