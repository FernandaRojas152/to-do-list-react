import React from 'react';
import { TodoContext } from '../TodoContext/index.jsx';
import { TodoCounter } from '../components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { TodoItem } from '../components/TodoItem/TodoItem.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.jsx';

function AppUI() {
    const { error, loading, filterTodos, completeTodos, deleteTodos } = React.useContext(TodoContext);
    return (
        <React.Fragment> {/** Se utiliza cuando vamos a usar varios componentes dentro de un mismo componente. */}
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Error...</p>}
                {loading && <p>Loading...</p>}
                {(!loading && !filterTodos.length) && <p> Create your first Todo </p>}

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