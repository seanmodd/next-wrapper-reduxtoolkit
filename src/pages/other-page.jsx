import React from 'react';
import Link from 'next/link';
import Increment from 'src/components/Increment';
import { useSelector } from 'react-redux';

export default function IndexPage() {
  const count = useSelector((state) => state.counter.value);
  console.log('This is count: ', count);
  return (
    <div>
      <h3>Rendering Redux Toolkit</h3>
      <h5>{count}</h5>
      <Increment />
      <Link href="/">Go back to home</Link>
    </div>
  );
}
