import React from 'react';
import Link from 'next/link';
import Increment from 'src/components/Increment';
import { useSelector } from 'react-redux';

export default function IndexPage() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h3>Rendering Redux Toolkit</h3>
      <Increment />
      <h5>{count}</h5>
      <Link href="/other-page">Go back to Other Page</Link>
    </div>
  );
}
