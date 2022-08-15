import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const todos = [
  { text: 'Apreciar a Xiao', completed: true },
  { text: 'Aprender React', completed: false },
  { text: 'Ir a La Universidad', completed: false },
  {text: 'Practicar', completed: false }
];

function App() {
  return (
    <React.Fragment> {/** Se utiliza cuando vamos a usar varios componentes dentro de un mismo componente. */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
