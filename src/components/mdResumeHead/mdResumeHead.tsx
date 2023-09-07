import { ComponentPropsWithoutRef, FC } from 'react';



export const mdResumeHead: FC<ComponentPropsWithoutRef<'h2'>> = ({ children }) => {
  return (
    <li
      className='pl-0 py-1.5 font-bold'
    >
      <a
        href={`#${children}`}
        className='text-inherit no-underline'
      >
        {children}
      </a>
    </li>
  );
};