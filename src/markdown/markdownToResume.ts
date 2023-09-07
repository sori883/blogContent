import { Fragment, createElement } from 'react';

import rehypeReact from 'rehype-react';
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { mdResumeHead } from 'components/mdResumeHead';
import { pickHeading } from 'markdown/lib/pickHeading';
 
export const markdownToResume = (markdownContent: string) => {
  const h2 = pickHeading(markdownContent);

  const res = unified()
    .use(remarkParse)
    .use(remarkRehype, { // mdast -> hast の変換
      allowDangerousHtml: true, // 直接記載されたタグを許可する
    })
    .use(rehypeReact, {
      Fragment, // divで囲まれるのを防ぐ
      components: {
        h2: mdResumeHead, // H2に目次用のSlugを付与
      },
      createElement,
    })
    .processSync(h2).result; // 実行

  return res;
};

