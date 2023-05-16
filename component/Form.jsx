import React, { useState } from 'react';

export default function Form({ onInsert }) {
  const [text, setText] = useState('');

  const onChange = e => {
    const newData = e.target.value;
    setText(newData);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      return;
    }

    onInsert(text);
    setText('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange}></input>
        <button>완료</button>
      </form>
    </>
  );
}
