import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Gallery from "../component/Gallery.jsx";

const Square = (props) => {
  const { value } = props;

  return <button>{value}</button>;
};

export default function Home() {
  const num = [1, 2, 3];
  return (
    <>
      <div>
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div>
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div>
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
