import { Divider, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Image from "next/image"
import React from "react"
import theme from "src/theme"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
const LatestNews = () => {
  return (
    <Stack alignItems={"center"}>
      <Stack
        sx={{
          width: {
            xs: "100%",
            md: "900px",
            borderRadius: "10px",
            overflow: "hidden",
          },
        }}
      >
        <Stack position="relative">
          <Stack>
            <Image
              src="https://loremflickr.com/1000/500/sports"
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
                backgroundImage: "linear-gradient(transparent, rgba(0,0,0,.5))",
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
                  Herchel walker leads Hawks celebration as Bulldogs beat
                  Spartans Herchel walker leads Hawks celebration as Bulldogs
                  beat Spartans{" "}
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
  )
}

export default LatestNews
