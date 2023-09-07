import type { InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';

import { ContainerBox } from 'components/layouts/containerBox';

export const getStaticProps = async () => {
  const files = fs.readdirSync('articles');
  const articles = files.map((fileName) => {
    const mdName = fileName.replace(/\.md$/, '');
    return {
      mdName,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

const IndexIsIndex:NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles
}) => {
  return (
    <div>
      <ContainerBox>
        <ul>
            {
              articles.map((item) => {
                return (
                  <li key={item.mdName}>
                    <a href={`posts/${item.mdName}`}>
                    {item.mdName}
                    </a>
                  </li>
                )
              })
            }
        </ul>
      </ContainerBox>
    </div>
  );
};



export default IndexIsIndex;