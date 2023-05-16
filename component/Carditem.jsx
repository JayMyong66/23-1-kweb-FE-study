import React, { useState } from 'react';

export default function Carditem({ todo, handleDelete, handleUpdate }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [text, setText] = useState('');

  let id = todo.id;

  const handleCheck = () => {
    console.log(isChecked);
    setIsChecked(!isChecked);
  };

  const onUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const onChange = e => {
    const newData = e.target.value;
    setText(newData);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      return;
    }
    handleUpdate(text, id);
    setText('');
    onUpdate();
  };

  return (
    <>
      {isUpdate ? (
        <div>
          <h3>{todo.title} 수정 </h3>
          <form onSubmit={onSubmit}>
            <input value={text} onChange={onChange}></input>
            <button>완료</button>
          </form>
          <button onClick={() => onUpdate()}>취소</button>
        </div>
      ) : (
        <div>
          <input type="checkbox" id={todo.id} onClick={handleCheck}></input>
          {!isChecked && <span>{todo.title + '   '}</span>}
          {isChecked && <span class="updated">{todo.title + '   '} 완료 !</span>}

          <button onClick={() => handleDelete(todo.id)}>삭제</button>
          <button onClick={() => onUpdate()}>수정</button>
        </div>
      )}
    </>
  );
}
