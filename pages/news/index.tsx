import { Stack, Grid } from "@mui/material"

import type { GetServerSidePropsContext, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useQuery } from "react-query"

import DecoratedTitle from "src/components/common/decaratedTitle"
import HeaderMeta from "src/components/common/header"

import LatestNews from "src/components/news/latestNews"
import NewsCard from "src/components/news/newsCard"
import { News } from "src/model"
import cacheKeys from "src/queries/cacheKeys"
import { getNews } from "src/queries/news"
import { getNewsFromCacheAndSync } from "src/queries/serverSideCache"
import theme from "src/theme"

interface HomeProps {
  news: News[]
  latestNews?: News
}

const Home: NextPage<HomeProps> = (props) => {
  const { news, latestNews } = props

  const [csNews, setCsNews] = useState<News[]>(news)
  const [csLatestNews, setCsLatestNews] = useState<News | undefined>(latestNews)

  useQuery(cacheKeys.homePageNews(), () => getNews(), {
    onSuccess: (result) => {
      const firstNews = result.shift()
      setCsNews(result)
      setCsLatestNews(firstNews)
    },
  })

  return (
    <Stack>
      <HeaderMeta
        data={{
          title: "Clubee | Sports news",
          description:
            "Always be updated, we bring the sports news around the world first.",
        }}
      />

      <main>
        <section>{csLatestNews && <LatestNews news={csLatestNews} />}</section>
        <section>
          <Stack p={{ xs: 4, lg: theme.spacing(4, 0, 4, "40px") }}>
            <Stack alignItems="center">
              <DecoratedTitle title="Other news" />
            </Stack>
            <Grid container spacing={4}>
              {csNews.map((item) => (
                <Grid item key={item.id}>
                  <NewsCard news={item} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </section>
      </main>

      <footer></footer>
    </Stack>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const news: News[] = await getNewsFromCacheAndSync()
  const latestNews = news.shift()
  return {
    props: {
      news,
      latestNews: latestNews || null,
    },
  }
}

export default Home
