import logo from './logo.svg';
import './App.css';
import { Todo, TodoList, TodoItems } from './components';

function App() {
  return (
    <div className="App">
      <h1>My ToDO list</h1>
      <Todo />
      <TodoList />
      <TodoItems />
    </div>
  );
}

export default App;
