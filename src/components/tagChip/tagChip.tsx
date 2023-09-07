import { Box } from '@mantine/core';

type Props = {
  tagsOnArticles: string[];
}


export const TagChip =({tagsOnArticles}: Props): JSX.Element => {
  return (
    <div className='flex'>
      {
        tagsOnArticles.map((tag) => (
          <Box
            key={tag}
            className='mr-2 border px-2 rounded-lg'
            sx={(theme) => ({
              fontSize: theme.fontSizes.tagChip,
              color: theme.white,
              backgroundColor: theme.colors.brand[9],
            })}
          >
            {tag}
          </Box>
        ))
      }
    </div>
  );
};