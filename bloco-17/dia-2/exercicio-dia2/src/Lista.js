import React from 'react';

function Lista({ todo }) {
  return (
    <div>
      <ul>
        {todo.map((item) => <li key={item}>{ item }</li>)}
      </ul>
    </div>
  );
}

export default Lista;