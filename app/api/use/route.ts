/* eslint-disable import/prefer-default-export */

'use server';

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function GET(request: Request) {
  const data = 'Got some stuff!';
  await sleep(1000);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
