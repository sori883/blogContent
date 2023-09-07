import { ComponentPropsWithoutRef, FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageLoader, pathBuilder } from 'lib/ImageLoader';


export const mdImage: FC<ComponentPropsWithoutRef<'img'>> = ({ src, alt, width = 700, height = 400 }) => {
  if (!src) return <span>src が指定されていません。</span>;

  return (
    <Link href={pathBuilder(src)}>
      <Image
        loader={imageLoader}
        src={src}
        alt={alt ?? 'alt なし'}
        width={Number(height)}
        height={Number(width)}
        priority
        sizes='(max-width: 600px) 90vw, (max-width: 900px) 60vw,  (max-width: 1200px) 40vw, 25vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Link>
  );
};