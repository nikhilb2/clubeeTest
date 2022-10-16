import { Collapse, Zoom, Stack, Typography, Slide, Grid } from "@mui/material"
import { Box } from "@mui/system"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import AnimatedClubeeLogo from "src/components/common/animatedClubeeLogo"
import FloatingBee from "src/components/common/floatingBee"
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
        <Stack></Stack>
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
