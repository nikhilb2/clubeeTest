import { Fade, Slide, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import FloatingBee from "./floatingBee"

interface AnimatedClubeeLogoProps {
  start: boolean
}

const AnimatedClubeeLogo = (props: AnimatedClubeeLogoProps) => {
  const [slide, setSlide] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide(true)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])
  const [fadeIn, setFadeIn] = useState(false)
  useEffect(() => {
    if (slide) {
      const timeout = setTimeout(() => {
        setFadeIn(true)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [slide])
  return (
    <Box mt={2} position="relative" width="200px" p={3}>
      <Fade in={fadeIn} timeout={500}>
        <Box>
          <Image
            src="/img/clubWithoutBee.svg"
            width={400}
            height={120}
            objectFit="contain"
          />
        </Box>
      </Fade>
      <Box
        sx={{
          position: "absolute",
          top: "24px",
          left: "82px",
          //transform: "translate(-50%, -50%)"
        }}
        width="45px"
      >
        <Slide in={slide} timeout={500}>
          <Stack>
            <FloatingBee />
          </Stack>
        </Slide>
      </Box>
      <Fade in={fadeIn} timeout={500}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
          }}
          width={200}
          mt={"-14px"}
          alignSelf="center"
          textAlign={"right"}
        >
          Sports news
        </Typography>
      </Fade>
    </Box>
  )
}

export default AnimatedClubeeLogo
