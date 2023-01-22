import React from 'react';
import { TodoContext } from '../TodoContext/index.jsx';
import { TodoCounter } from '../components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { TodoItem } from '../components/TodoItem/TodoItem.jsx';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.jsx';
import {Modal} from "../Modal/"

function AppUI() {
    const { error,
        loading,
        filterTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal } = React.useContext(TodoContext);
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

            {!!openModal && (<Modal>
                <TodoForm />
            </Modal>
            )}

            <CreateTodoButton>
                setOpenModal= {setOpenModal}
            </CreateTodoButton>


        </React.Fragment>
    );
}

export { AppUI };