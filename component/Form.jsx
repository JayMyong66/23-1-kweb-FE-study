import React, { useState } from 'react';

export default function Form({ onInsert }) {
  const [text, setText] = useState('');
  const [Selected, setSelected] = useState('');

  const onChange = e => {
    const newData = e.target.value;
    setText(newData);
  };

  const handleSelect = e => {
    console.log(e);
    setSelected(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      return;
    }

    onInsert(text, Selected);
    setText('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange}></input>
        <select>
          <option value="highest" onClick={handleSelect}>
            highest
          </option>
          <option value="high">high</option>
          <option value="medium" selected>
            medium
          </option>
          <option value="low">low</option>
          <option value="lowest">lowest</option>
        </select>
        <button>완료</button>
      </form>
    </>
  );
}
