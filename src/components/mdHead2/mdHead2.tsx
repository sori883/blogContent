import { ComponentPropsWithoutRef, FC } from 'react';

import { Divider } from '@mantine/core';

export const mdHead2: FC<ComponentPropsWithoutRef<'h2'>> = ({ children }) => (
  <div>
    <h2
      id={`${children}`}
      className='mb-2'
    >
      {children}
    </h2>
    <Divider
      className='mb-6'
    />
  </div>
);