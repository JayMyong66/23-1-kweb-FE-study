import { useState } from "react";

export default function Square(props) {
  const { value, onhandleClick } = props;
  const [val, setval] = useState(null);

  return (
    <button className="square" onClick={onhandleClick}>
      {value}
    </button>
  );
}
