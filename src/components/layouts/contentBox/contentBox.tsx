import { ReactNode } from 'react';

import { Box } from '@mantine/core';

import ContentStyle from 'styles/contentStyle';

type Props = {
  children: ReactNode;
}

export const ContentBox = ({children}:Props): JSX.Element => {
  return (
    <Box
      className='shadow-md p-5 rounded-md'
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
    >
      <ContentStyle>
        { children }
      </ContentStyle>
    </Box>
  );
};