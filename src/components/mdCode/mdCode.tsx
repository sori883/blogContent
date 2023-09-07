import { ComponentPropsWithoutRef, FC } from 'react';

import { Prism } from '@mantine/prism';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';

import { isLanguage } from 'types/isLanguage';


export const mdCode: FC<ComponentPropsWithoutRef<'code'>> = ({ className, children }) => {

  const match = /language-(\w+)/.exec(className || '');
  const lang = match && isLanguage(match[1]) ? match[1] : 'bash';

  return (
    <Prism
      language={lang}
      withLineNumbers
      getPrismTheme={(_theme, ) => duotoneDark}
    >
      {String(children).replace(/\n$/, '')}
    </Prism>
  );
};