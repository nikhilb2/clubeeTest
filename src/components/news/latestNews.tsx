import { Box, Button, Divider, Typography, SxProps } from "@mui/material"
import { Stack } from "@mui/system"
import Image from "next/image"
import React from "react"
import theme from "src/theme"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import DecoratedTitle from "../common/decaratedTitle"
import { News } from "src/model"

const styles: { [key: string]: SxProps } = {
  customBoxDescription: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 6,
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,

    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}
interface NewsCardProps {
  news: News
}

const LatestNews = (props: NewsCardProps) => {
  const { news } = props
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      pl={{ xs: 0, md: 4 }}
      pr={{ xs: 0, md: 4 }}
      alignItems="center"
      flexWrap={"wrap"}
    >
      <Stack alignItems={"center"}>
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "800px",
              sm: "600px",
            },
            borderRadius: {
              xs: 0,
              md: "5px",
            },
            overflow: "hidden",
          }}
        >
          <Stack position="relative">
            <Stack>
              <Image
                src={news.image}
                alt={news.title}
                width="1000px"
                height="500px"
                priority
              />
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundImage:
                    "linear-gradient(transparent, rgba(0,0,0,.5))",
                  padding: 3,
                }}
              >
                <Divider color="#ffffff" />
                <Stack direction="row" alignItems={"center"}>
                  <Typography
                    flex={9}
                    variant="h2"
                    sx={{
                      color: theme.palette.primary.contrastText,
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    {news.title}
                  </Typography>

                  <Stack flex={1}>
                    <PlayCircleOutlineIcon
                      sx={{
                        fontSize: 60,
                        color: theme.palette.primary.contrastText,
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack p={2} spacing={3} width={{ lg: "900px", md: "100%" }}>
        <Stack alignSelf={"center"}>
          <DecoratedTitle title="Latest news" />
        </Stack>
        <Stack>
          <Typography variant="caption">
            Author:{" "}
            <Box component="span" sx={{ fontWeight: 500 }}>
              {news.author}
            </Box>
          </Typography>
          <Typography variant="caption">
            Date:{" "}
            <Box component="span" sx={{ fontWeight: 500 }}>
              {news.date}
            </Box>
          </Typography>
        </Stack>
        <Typography sx={styles.customBoxDescription}>
          {news.description}
        </Typography>
        <Stack alignItems={"flex-end"}>
          <Button variant="contained">Read more</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LatestNews
