import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { TodoItem } from '../components/TodoItem/TodoItem.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.jsx';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    completeTodos,
    deleteTodos,
}) {
    return (
        <React.Fragment> {/** Se utiliza cuando vamos a usar varios componentes dentro de un mismo componente. */}
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {filterTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />


        </React.Fragment>
    );
}

export { AppUI };