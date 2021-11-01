import React, { useState } from 'react';
import MyContext from './MyContext';

function ListaProvider({ children }) {
  const [todo, setTodo] =useState([]);

  const addTodo = (newTodo) => {
    setTodo(todo.concat(newTodo));
  }

  return (
    <MyContext.Provider value={{ todo, addTodo }}>
      {children}
    </MyContext.Provider>
  );
}

export default ListaProvider;
