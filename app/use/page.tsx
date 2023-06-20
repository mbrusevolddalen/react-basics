import { Suspense } from 'react';
import UsePage from './usePage';

function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UsePage />
    </Suspense>
  );
}

export default Page;
