import { ReactNode } from 'react';

import { Container } from '@mantine/core';

const sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

type Props = {
  children?: ReactNode;
  containerSize?: keyof typeof sizes;
}

export const ContainerBox = ({ 
  children,
  containerSize = 'xl'
}: Props): JSX.Element => {
  return (
    <div className='block md:grid md:grid-rows-[auto ltr auto] md:min-h-[100vh]'>
      <Container
        className='my-12 p-0'
        size={containerSize}>
        { children }
      </Container>
    </div>
  );
};