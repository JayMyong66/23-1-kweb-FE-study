import React, { useEffect, useRef, useState } from 'react';
import Card from '../component/Card.jsx';
import Form from '../component/Form.jsx';
import Link from 'next/link.js';

export default function Todos() {
  const newId = useRef(4);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'first',
    },
    {
      id: 2,
      title: 'second',
    },
    {
      id: 3,
      title: 'third',
    },
  ]);
  useEffect(() => {}, [todos]);

  const handleInsert = text => {
    const newDataTitle = text;
    const newData = {
      id: newId.current++,
      title: newDataTitle,
    };
    setTodos([...todos, newData]);
  };

  const handleDelete = id => {
    const newTodos = todos.filter(todo => {
      return todo.id != id;
    });
    setTodos(newTodos);
  };

  const handleUpdate = (text, id) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, title: text } : todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <button>
        <Link href={`/`}>home으로 갑니다!</Link>
      </button>
      <Form onInsert={handleInsert} />
      <Card todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </>
  );
}
