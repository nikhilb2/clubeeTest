import { Typography, Stack, IconButton, Box } from "@mui/material"
import React from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { moreStyles } from "src/theme"
import Link from "next/link"
import Image from "next/image"
import { getNewsFromCacheAndSync } from "src/queries/serverSideCache"
import { GetServerSidePropsContext, NextPage } from "next"
import { getNewsById } from "src/queries/news"
import { News } from "src/model"
import { formatDate } from "src/lib"
import HeaderMeta from "src/components/common/header"

interface NewsPageProps {
  news: News
}

const NewsPage: NextPage<NewsPageProps> = (props) => {
  const { news } = props
  return (
    <>
      <HeaderMeta
        data={{
          title: `${news.title} | Clubee`,
          description: news.description,
          image: news.image,
          author: news.author,
        }}
      />
      <Link href="/news">
        <a>
          <Stack direction="row" spacing={1} padding={2} alignItems="center">
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography sx={moreStyles.link}>Back to news</Typography>
          </Stack>
        </a>
      </Link>
      <article>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Stack>
              <Image
                blurDataURL="/img/placeholder-image.png"
                alt={news.title}
                src={news.image}
                width="1090px"
                height={"595px"}
                objectFit="contain"
                priority
              />
            </Stack>
            <Stack
              direction={"row"}
              spacing={{ xs: 4, md: 4 }}
              justifyContent="center"
              flexWrap="wrap"
            >
              <Typography fontSize={{ md: "18px", xs: "14px" }}>
                {" "}
                <Box
                  component="span"
                  sx={{
                    color: "#A3A3A3",
                  }}
                >
                  By:
                </Box>{" "}
                {news.author}
              </Typography>
              <Typography fontSize={{ md: "18px", xs: "14px" }}>
                {" "}
                <Box
                  component="span"
                  sx={{
                    color: "#A3A3A3",
                  }}
                >
                  Date:
                </Box>{" "}
                {formatDate(news.date)}
              </Typography>
              <Typography fontSize={{ md: "18px", xs: "14px" }}>
                {" "}
                <Box
                  component="span"
                  sx={{
                    color: "#A3A3A3",
                  }}
                >
                  Published on:
                </Box>{" "}
                Clubee news
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={3} p={4}>
            <Typography
              variant="h2"
              fontSize={{ md: "40px", xs: "24px" }}
              textAlign="center"
              fontWeight={500}
            >
              {news.title}
            </Typography>
            <Typography fontSize={{ md: "18px", xs: "14px" }}>
              {news.description}
            </Typography>
          </Stack>
        </Stack>
      </article>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(JSON.stringify(ctx.query))

  const id = String(ctx.query.id)
  const allNews = await getNewsFromCacheAndSync()
  const cachedNews = allNews.find((item) => item.id === id)
  if (cachedNews) {
    return {
      props: {
        news: cachedNews,
      },
    }
  }

  const fetchedNews = await getNewsById(id)
  if (!fetchedNews) {
    return { redirect: { permanent: false, destination: "/404" } }
  }
  return {
    props: {
      news: fetchedNews,
    },
  }
}

export default NewsPage
