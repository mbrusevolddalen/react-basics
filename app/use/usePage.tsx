/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import { use } from 'react';

async function fetchSomeStuff() {
  const data = await fetch('http://localhost:3000/api/use');
  return data.json();
}
function UsePageContent() {
  const someStuff = use(fetchSomeStuff());
  return (
    <section>
      <h1>use</h1>
      <p>{someStuff}</p>
    </section>
  );
}

export default UsePageContent;
