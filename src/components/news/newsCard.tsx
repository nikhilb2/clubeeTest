import { Button, Stack, SxProps, Typography } from "@mui/material"
import React from "react"

import theme from "src/theme"

import Link from "next/link"
import Image from "next/image"
import { Box } from "@mui/system"

const styles: { [key: string]: SxProps } = {
  container: {
    position: "relative",
    maxWidth: { xs: "100%", md: "400px" },
    width: {
      lg: "calc((100vw - 82px) / 4.3)",
      xs: "100%",
      md: "calc(100vw / 3.5)",
    },
    overflow: "hidden",
    // height: "375px",
    boxShadow: "0px 4px 10px 2px rgba(200, 200, 200, 0.25)",
    borderRadius: "2px",
    "&:hover": {
      "& .newsImage": {
        transform: "scale(1.2)",
      },
    },
  },
  image: {
    height: "204px",
    [theme.breakpoints.down("sm")]: {
      height: "235px",
    },
    width: "100%",
    objectFit: "cover",
    transition: "transform 1s ease",
    overflow: "hidden",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  customBoxTitle: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    //color: theme.palette.secondary.main,
    fontSize: "18px",
    //lineHeight: "150%",

    fontWeight: 500,

    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    pt: 3,

    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  customBoxDescription: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 4,
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,

    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    //  color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    fontSize: "16px",
    lineHeight: "150%",
  },
  button: {
    fontSize: "16px",

    [theme.breakpoints.up("sm")]: {
      width: "149px",
    },
    position: "absolute",
    bottom: "20px",
  },
}

const NewsCard = (props: { random: number }) => {
  return (
    <Link href={`/`} as={`/`}>
      <a>
        <article>
          <Stack sx={styles.container}>
            <Stack sx={styles.image} className="newsImage">
              <Image
                quality={100}
                src={`https://loremflickr.com/500/400/sports?random=${props.random}`}
                alt={"test"}
                width="500"
                height="400"
                objectFit="cover"
              />
            </Stack>
            <Stack padding={theme.spacing(3)} spacing={2}>
              <Typography variant="h5" sx={styles.customBoxTitle}>
                {"Test titlte"}
              </Typography>
              <Typography sx={styles.customBoxDescription}>
                This is a very long test description. This is a very long test
                description. This is a very long test description.This is a very
                long test description. This is a very long test description.
                This is a very long test description. This is a very long test
                description.This is a very long test description. This is a very
                long test description. This is a very long test description.
                This is a very long test description.This is a very long test
                description.
              </Typography>

              <Box alignSelf="flex-end">
                <Button variant="contained" color="secondary">
                  Read more
                </Button>
              </Box>
            </Stack>
          </Stack>
        </article>
      </a>
    </Link>
  )
}

export default NewsCard
