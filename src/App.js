import React from 'react';
import { Data } from './components/Data';
import TodoList from './components/TodoList';
import {useState} from 'react'
import './App.css'
import AddTodo from './components/AddTodo';
function App() {
  const [todos,setTodos] = useState(Data)

  const addTodo =(newTodo)=>{
    setTodos([...todos, newTodo])
  }
  return (
   <div className="App">
     <h1>My Todo List</h1>
 <TodoList todos={todos}/>
 <AddTodo addTodo={addTodo}/>
   </div>
  );
}

export default App;
