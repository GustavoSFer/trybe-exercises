import { useState } from 'react';
import Input from './Input';
import Lista from './Lista';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo(todo.concat(newTodo));
  }

  return (
    <div>
      <Input addTodo={addTodo} />
      <Lista todo={todo} />
    </div>
  );
}

export default App;
