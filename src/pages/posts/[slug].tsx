import fs from 'fs';

import { Box, Divider, Grid, Text } from '@mantine/core';
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage  } from 'next';

import { View } from 'components/layouts/markdown';
import { Resume } from 'components/layouts/resume';
import { ContainerBox } from 'components/layouts/containerBox';
import { ContentBox } from 'components/layouts/contentBox';

import { loadFront } from 'yaml-front-matter';
import { TagChip } from 'components/tagChip';

type Meta = {
  title: string;
  slug: string;
  published: boolean;
  tagNames: string[];
  entry: string;
}


export const getStaticPaths = async () => {
  const files = fs.readdirSync('articles');
  const paths = files.map((fileName) => ({ params: {slug: `${fileName.replace(/\.md$/, '')}`}}))
  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  if (typeof params?.slug !== 'string') {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(`articles/${params.slug}.md`, 'utf-8');
  const readArticle = loadFront(fileContent, {
    contentKeyName: 'entry'
  })as unknown as Meta;

  return {
    props: {
      article: readArticle
    },
  };
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article
}) => {
  // タグ
  const tags = article.tagNames.map((item) => String(item));

  return (
    <>
      <ContainerBox
        containerSize='xl'
      >
        <Grid
          className='justify-center'
        >
          <Grid.Col
            xs={12}
            md={12}
            lg={7}
            className='p-0'
          >
            <ContentBox>
              <h1>
                {article.title}
              </h1>
              <Text className='my-2'>
                {`投稿日：適当`}
              </Text>
              {
                tags ? 
                  <TagChip
                    tagsOnArticles={tags}
                  />
                  :
                  <></>
              }
              <Divider
                size='lg'
                className='lg:mt-4 xs:mt-0 mb-8'
              />
              <View>
                { String(article.entry) }
              </View>
            </ContentBox>
          </Grid.Col>

          <Grid.Col
            xs={12}
            md={12}
            lg={2}
          >
            <Box
              className='hidden md:flex shadow rounded-md sticky top-14 mb-12'
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              })}>
            </Box>
            <Box
              className='hidden md:block shadow rounded-md w-full sticky top-14 mb-12'
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              })}>
              <Text
                className='px-6 pt-6'
              >
                目次<br />
                <a href='/'>戻る！！</a>
              </Text>
              <Resume>
                { String(article.entry) }
              </Resume>
            </Box>
          </Grid.Col>
        </Grid>

      </ContainerBox>
    </>
  );
};

export default Article;
