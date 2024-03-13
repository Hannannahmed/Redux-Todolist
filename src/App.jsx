import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
  <h1 className="text-center">Redux Todo List</h1>
  <AddTodo />
    <Todos />
    </>
  )
}

export default App
