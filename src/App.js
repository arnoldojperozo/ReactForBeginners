import React from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
