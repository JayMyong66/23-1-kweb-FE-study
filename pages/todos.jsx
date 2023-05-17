import React, { useEffect, useRef, useState } from 'react';
import Card from '../component/Card.jsx';
import Form from '../component/Form.jsx';
import Link from 'next/link.js';
import useStore from '../store.js';

export default function Todos() {
  const newId = useRef(4);
  const { todos, updateTodos } = useStore(state => state);

  useEffect(() => {}, [todos]);

  const handleInsert = (text, selected) => {
    const newDataTitle = text;
    const newData = {
      id: newId.current++,
      title: newDataTitle,
      prior: selected,
    };
    console.log('Insert!!', newData);
    updateTodos([...todos, newData]);
  };

  const handleDelete = id => {
    const newTodos = todos.filter(todo => {
      return todo.id != id;
    });
    updateTodos(newTodos);
  };

  const handleUpdate = (text, id) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, title: text } : todo;
    });
    console.log('새거', newTodos);
    updateTodos(newTodos);
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
