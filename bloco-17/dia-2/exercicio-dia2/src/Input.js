import React, { useContext, useState } from 'react';
import MyContext from './MyContext';

function Input() {

  const { addTodo } = useContext(MyContext);
  
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <div>
     <label htmlFor="lista">
       insira uma tarefa:
      <input
        type='text'
        onChange={handleChange}
        value={newTodo}
        name="newTodo"
        id="lista"
      />
     </label>
      <button type="button" onClick={handleClick}>Salvar</button>
    </div>
  );
}

export default Input;
