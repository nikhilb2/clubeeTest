import { Stack, Grid } from "@mui/material"

import type { NextPage } from "next"
import Head from "next/head"
import DecoratedTitle from "src/components/common/decaratedTitle"

import LatestNews from "src/components/news/latestNews"
import NewsCard from "src/components/news/newsCard"

const Home: NextPage = () => {
  return (
    <Stack>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stack alignItems="center">
          <DecoratedTitle title="Latest news" />
        </Stack>
        <LatestNews />
        <Grid container spacing={4} p={4}>
          <Grid item>
            <NewsCard random={1} />
          </Grid>
          <Grid item>
            <NewsCard random={2} />
          </Grid>
          <Grid item>
            <NewsCard random={3} />
          </Grid>
          <Grid item>
            <NewsCard random={4} />
          </Grid>
          <Grid item>
            <NewsCard random={5} />
          </Grid>
        </Grid>
      </main>

      <footer></footer>
    </Stack>
  )
}

export default Home
