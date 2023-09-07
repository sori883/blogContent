import { Fragment, ReactElement, createElement } from 'react';

import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { mdCode } from 'components/mdCode';
import { mdHead2 } from 'components/mdHead2';
import { mdImage } from 'components/mdImage';
import { mdLink } from 'components/mdLink';

export const markdownToHtml = (markdownContent: string): ReactElement => {
  return unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remarkGfm) // GFMに変換をするプラグイン
    .use(remarkBreaks) // 改行をbrにするプラグイン
    .use(remarkRehype, { // mdast -> hast の変換
      allowDangerousHtml: true, // 直接記載されたタグを許可する
    })
    .use(rehypeRaw) // タグをタグとして使うやつ
    .use(rehypeReact, {
      Fragment, // divで囲まれるのを防ぐ
      components: {
        a: mdLink, // mdのリンクを独自コンポーネントに変換
        img: mdImage, // mdのimgを独自コンポーネントに変換
        code: mdCode, // CodeをPrismに変換
        h2: mdHead2, // H2に目次用のSlugを付与
      },
      createElement,
    })
    .processSync(markdownContent).result; // 実行
};