import React, { useContext } from 'react';
import MyContext from './MyContext';

function Lista() {
  const { todo } = useContext(MyContext);
  return (
    <div>
      <ul>
        {todo.map((item) => <li key={item}>{ item }</li>)}
      </ul>
    </div>
  );
}

export default Lista;