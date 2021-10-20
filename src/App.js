import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import './App.css';

const todos = [
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
  return (
    <>
      <Header />
      <Form />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
