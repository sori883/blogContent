import { ComponentPropsWithoutRef, FC } from 'react';

import Link from 'next/link';

export const mdLink: FC<ComponentPropsWithoutRef<'a'>> = ({ href, children }) => {
  return (
    href?.includes('http') ? 
      <Link href={href}
        className='a-link no-underline inline-flex items-center break-all'
      >
        {children}
      </Link>
      :
      <a href={href} rel='noopener noreferrer' target='_blank' className='a-link no-underline inline-flex items-center break-all'>
        {children}
      </a>
  );
};
