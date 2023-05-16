import React from 'react';
import Carditem from './Carditem';

export default function Card({ todos, handleDelete, handleUpdate }) {
  return (
    <>
      {todos &&
        todos.map(todo => {
          return (
            <>
              <Carditem key={todo.id} todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate}></Carditem>
            </>
          );
        })}
    </>
  );
}
