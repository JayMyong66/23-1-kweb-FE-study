import Head from 'next/head';
import Image from 'next/image';

import { useState } from 'react';
import Link from 'next/link.js';
import useStore from '../store';

export default function Index() {
  const { bears, increasePopulation, removeAllBears, todos, updateTodos } = useStore(state => state);

  const totalCount = todos.length;
  const priorCount = { high: 0, medium: 0, low: 0, highest: 0, lowest: 0 };
  todos.map(todo => {
    if (todo.prior === 'high') {
      priorCount.high++;
    } else if (todo.prior === 'medium') {
      priorCount.medium++;
    } else if (todo.prior === 'low') {
      priorCount.low++;
    } else if (todo.prior === 'highest') {
      priorCount.highest++;
    } else if (todo.prior === 'lowest') {
      priorCount.lowest++;
    }
  });

  return (
    <>
      <button>
        <Link href={`/todos`}>todos로 갑니다!</Link>
      </button>
      <h1>전체 Todo의 갯수 : {totalCount}</h1>
      <h1>high Todo의 갯수 : {priorCount.high}</h1>
      <h1>medium Todo의 갯수 : {priorCount.medium}</h1>
      <h1>low Todo의 갯수 : {priorCount.low}</h1>
      <h1>highest Todo의 갯수 : {priorCount.highest}</h1>
      <h1>lowest Todo의 갯수 : {priorCount.lowest}</h1>
      {/* <h1>{bears} around here ...</h1>
      <h1>{todos[0].title}</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove all</button> */}
      {/* <button
        onClick={() => {
          updateTodos('dd');
        }}
      >
        changeTodos
      </button> */}
    </>
  );
}
