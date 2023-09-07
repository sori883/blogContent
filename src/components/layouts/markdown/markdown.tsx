import { markdownToHtml } from 'markdown/markdownToHtml';

import ContentStyle from 'styles/contentStyle';

type Props = {
  children: string;
}

export const View = ({children}: Props): JSX.Element => {
  return (
    <ContentStyle>
      {markdownToHtml(children)}
    </ContentStyle>
  );
};