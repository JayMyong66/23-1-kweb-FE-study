import Head from 'next/head';
import Image from 'next/image';

import { useState } from 'react';
import Link from 'next/link.js';

export default function Index() {
  return (
    <>
      <button>
        <Link href={`/todos`}>todos로 갑니다!</Link>
      </button>
    </>
  );
}
