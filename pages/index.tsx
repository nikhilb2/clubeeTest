import { Slide, Typography, Collapse, styled, Button } from "@mui/material"
import { Stack } from "@mui/system"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useState } from "react"
import FloatingBee from "src/components/common/floatingBee"
import SimpleInput from "src/components/inputs/simpleInput"

const ChatPoppup = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  padding: theme.spacing(2),
  height: "fit-content",
  width: "fit-content",
  borderRadius: "20px",
  borderTopRightRadius: "0px",
  marginRight: "0px",
  marginLeft: "auto",
}))

const WelcomeBee = () => {
  const [slide, setSlide] = useState(false)
  const [growMessage, setGrowMessage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide(true)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (growMessage < 3) {
      const timeout = setTimeout(() => {
        setGrowMessage(growMessage + 1)
      }, 1500)
      return () => clearTimeout(timeout)
    }

    if (growMessage === 5) {
      const timeout = setTimeout(() => {
        setSlide(false)
        setTimeout(() => {
          router.push("/news")
        }, 1000)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [growMessage])

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slide in={slide}>
        <Stack>
          <Stack direction="row">
            <Collapse in={growMessage !== 5} timeout={1000}>
              <Stack spacing={2}>
                <Collapse in={growMessage > 0}>
                  <ChatPoppup>
                    <Typography
                      alignSelf="flex-end"
                      textAlign={"right"}
                      color="primary.contrastText"
                    >
                      Hi I am Bee!
                    </Typography>
                  </ChatPoppup>
                </Collapse>
                <Collapse in={growMessage > 1}>
                  <ChatPoppup>
                    <Typography color="primary.contrastText">
                      What can i call you?
                    </Typography>
                  </ChatPoppup>
                </Collapse>
                <Collapse in={growMessage > 2}>
                  <Stack direction="row">
                    <SimpleInput
                      focus={growMessage > 1}
                      placeholder="Enter your name here"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setGrowMessage(4)}
                    >
                      Ok
                    </Button>
                  </Stack>
                </Collapse>
                <Collapse in={growMessage > 3}>
                  <ChatPoppup>
                    <Typography color="primary.contrastText">
                      Just follow me.
                    </Typography>
                  </ChatPoppup>
                </Collapse>
                <Collapse in={growMessage > 3}>
                  <Button
                    onClick={() => {
                      setGrowMessage(5)
                      setTimeout(() => {
                        const audio = new Audio("sounds/buzz.mp3")
                        audio.volume = 0.1
                        audio.play()
                      }, 500)
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Click here to Follow the bee
                  </Button>
                </Collapse>
              </Stack>
            </Collapse>
            <FloatingBee translatePixel={"-30px"} />
          </Stack>
        </Stack>
      </Slide>
    </Stack>
  )
}

export default WelcomeBee
