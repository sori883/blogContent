export const pickHeading = (markdown: string): string => {
  const replaceMarkdown = markdown.replace(/\r\n|\r/g, '\n');
  const lines = replaceMarkdown.split('\n');

  const headings = lines.filter((item) => {
    return  item !== '' && item.includes('##');
  });

  return headings.join('\n');
};
