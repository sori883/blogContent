import { markdownToResume } from 'markdown/markdownToResume';

type Props = {
  children: string;
}

export const Resume = ({children}: Props): JSX.Element => {
  return (
    <div
      className='md:px-4 pb-4'
    >
      <ul
        className='list-outside pl-4'
      >
        { markdownToResume(children) }
      </ul>
    </div>
  );
};