import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const defaultTodos = [
  { text: 'Apreciar a Xiao', completed: true },
  { text: 'Aprender React', completed: false },
  { text: 'Ir a La Universidad', completed: false },
  {text: 'Practicar', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue]= React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  let filterTodos= [];
  
  if(!searchValue.length >= 1){
    filterTodos= todos;
  }else{
    filterTodos= todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    /* todos.filter(todo =>{
      const todoText= todo.text.toLowerCase();
      const filterText= searchValue.toLowerCase();
      return todoText.includes(filterText);
    }) */
  }

  const totalTodos= todos.length;

  const completeTodos= (text) => {
    const todoIndex= todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed= !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodos= (text) => {
    const todoIndex= todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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

export default App;
