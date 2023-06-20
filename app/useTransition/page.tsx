'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';

const names = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Angela',
  'Bella',
  'Carol',
  'Caroline',
  'Carolyn',
  'Deirdre',
  'Diana',
  'Elizabeth',
  'Ella',
  'Faith',
  'Olivia',
  'Penelope',
];

function ListItem({ name, highlight }: { name: string; highlight: string }) {
  const isHighlighted = highlight && name.toLowerCase().includes(highlight.toLowerCase());

  return (
    <div>{isHighlighted ? <b>{name}</b> : name}</div>
  );
}

function FilterList() {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState('');
  const [isPending, startTransition] = useTransition();

  const changeHandler = (value: string) => {
    setQuery(value);
    startTransition(() => setHighlight(value));
  };
  console.log('isPending', isPending);
  return (
    <section>
      <h1>useTransition</h1>
      <div className="flex flex-col gap-4">
        <input onChange={(e) => changeHandler(e.target.value)} value={query} type="text" />
      </div>
      {isPending && <div> loading</div>}
      <div>
        {names.map((name, i) => (
          <ListItem key={i} name={name} highlight={highlight} />
        ))}
      </div>
      <Link href="/use">use</Link>
    </section>
  );
}

export default FilterList;
