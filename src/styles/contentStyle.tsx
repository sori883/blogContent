import { ReactNode } from 'react';

import { Box } from '@mantine/core';

type Props = {
  children: ReactNode;
}

export default function ContentStyle({children}: Props): JSX.Element {
  return (
    <Box
      className='m-0 content-entry p-0'
    >
      { children }
    </Box>
  );
}