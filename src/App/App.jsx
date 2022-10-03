import React from 'react';
import {AppUI} from './AppUI';
//import './App.css';

/* const defaultTodos = [
  { text: 'Apreciar a Xiao', completed: true },
  { text: 'Aprender React', completed: false },
  { text: 'Ir a La Universidad', completed: false },
  {text: 'Practicar', completed: false }
]; */

function useLocalStorage(itemName, initialValue) {
  const localStorageItem= localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem= initialValue;
  }else{
    parsedItem= JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  const saveItem= (newItem) =>{
    const stringifiedItem= JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [
    item, saveItem
  ];
}

function App() {
  const[todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  }

  const deleteTodos= (text) => {
    const todoIndex= todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}

      searchValue={searchValue}
      setSearchValue={setSearchValue}

      filterTodos={filterTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
