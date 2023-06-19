'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import '../../app/globals.css'

export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  const items = [
    {
      name: 'useState',
      slug: 'useState'
    },
    {
      name: 'useEffect',
      slug: 'useEffect'
    },
    {
      name: 'useTransition',
      slug: 'useTransition'
    }
  ];
  
export function GlobalNav() {
  return (
    <aside className="grid h-screen border-r bg-red-600 grid-flow-col">
        <nav className="grid grid-flow-row h-inherit">
          {items.map((item) => <GlobalNavItem key={item.slug} item={item} />)}
        </nav>
    </aside>
  );
}

function GlobalNavItem({
  item,
}: {
  item: Item;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
