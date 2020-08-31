import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <a href="https://github.com/miguelferreira6/react-task-list" style="display: block;">
          <img src="/images/logo.png" alt=""/>
          <h1>To-Do List</h1>
        </a>
        <TodoList />
      </div>
    </div>
  );
}

export default App;