import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import './App.css';

const todoList = [
  {
    title: 'Give a dog bath',
    done: false
  },
  {
    title: 'Vacuum floor',
    done: false
  },
  {
    title: 'Do Laundry',
    done: true
  },
]

function App() {
  const [todos, setTodos] = useState(todoList)

  console.log(todos);

  const addTask = (title) => {
    if (!title || /^\s*$/.test(title)) {
      return;
    }
    const newTodos = [{ title, done: false }, ...todos]

    setTodos(newTodos)
  }

  const onComplete = (id) => {
    setTodos(todos.map((todo, i) => {
      if (i === id) {
        todo.done = !(todo.done);
        return todo
      } else {
        return todo;
      }
    }))
  }

  const clearCompletedTasks = () => {
    setTodos(todos.filter(todo => todo.done === false))
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} clearCompletedTasks={clearCompletedTasks} />
      <TodoList todos={todos} onComplete={onComplete} />
    </>
  );
}

export default App;
