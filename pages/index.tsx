import {
  Slide,
  Typography,
  Collapse,
  styled,
  Button,
  ListItemButton,
} from "@mui/material"
import { Stack } from "@mui/system"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useState } from "react"
import FloatingBee from "src/components/common/floatingBee"
import SimpleInput from "src/components/inputs/simpleInput"
import {
  getUserNameFromLocalStorage,
  setUserNameInCacheAndLocalStorage,
} from "src/queries/auth"

const ChatPoppup = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  padding: theme.spacing(2),
  height: "fit-content",
  width: "fit-content",
  maxWidth: "300px",
  borderRadius: "20px",
  borderTopRightRadius: "0px",
  marginRight: "0px",
  marginLeft: "auto",
}))

interface WelcomeBeeProps {
  userName: string | null
}

const pauseNoName = [2, 6]

const pauseName = [3]

const WelcomeBee: NextPage<WelcomeBeeProps> = (props) => {
  const { userName } = props
  const [slide, setSlide] = useState(false)
  const [growMessage, setGrowMessage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide(true)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  const [keepCounting, setKeepcounting] = useState(true)

  useEffect(() => {}, [keepCounting, growMessage])

  useEffect(() => {
    if (keepCounting) {
      const timeout = setTimeout(() => {
        setGrowMessage(growMessage + 1)
        if ((userName ? pauseName : pauseNoName).includes(growMessage)) {
          setKeepcounting(false)
        }
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [keepCounting, growMessage, userName])

  const [showChat, setShowChat] = useState(true)
  const [nameError, setNameError] = useState<string[]>([])

  const [name, setName] = useState("")
  const [tempName, setTempName] = useState("")

  const navigate = useCallback(() => {
    setShowChat(false)
    if (name) {
      setUserNameInCacheAndLocalStorage(name)
    }
    setKeepcounting(false)
    setTimeout(() => {
      setSlide(false)
    }, 500)
    setTimeout(() => {
      router.push("/news")
    }, 1500)

    const audio = new Audio("sounds/buzz.mp3")
    audio.volume = 0.1
    audio.play()
  }, [name])
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
        <Stack spacing={2}>
          {!userName && (
            <Collapse in={growMessage > 1 && !name}>
              <Stack
                direction="row"
                justifyContent={"flex-end"}
                marginRight="100px"
              >
                <SimpleInput
                  value={tempName}
                  onChange={(text) => setTempName(text)}
                  placeholder="Enter your name here"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    if (!tempName) {
                      setNameError([
                        "You dont have a name? Thats wierd.",
                        ...nameError,
                      ])
                      return
                    }
                    if (tempName.length < 3) {
                      setNameError([
                        "Its hard for me to remember so short name, can you be more specific.",
                        ...nameError,
                      ])
                      return
                    }
                    setName(tempName)
                    setKeepcounting(true)
                  }}
                >
                  Ok
                </Button>
              </Stack>
            </Collapse>
          )}
          <Stack direction="row">
            <Stack>
              <Stack height="300px" width="300px" overflow="scroll">
                {!!userName ? (
                  <Collapse in={showChat}>
                    <Stack spacing={2}>
                      <Collapse in={growMessage > 3}>
                        <Button
                          onClick={navigate}
                          variant="contained"
                          color="secondary"
                        >
                          Click here to Follow the bee
                        </Button>
                      </Collapse>
                      <Collapse in={growMessage > 2}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            Follow me.
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                      <Collapse in={growMessage > 1}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            Let explore the world of sports.
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                      <Collapse in={growMessage > 0}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            Welcome back {userName}!
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                    </Stack>
                  </Collapse>
                ) : (
                  <Collapse in={showChat}>
                    <Stack spacing={2}>
                      <Collapse in={growMessage > 5}>
                        <Stack>
                          <Button
                            onClick={navigate}
                            variant="contained"
                            color="secondary"
                          >
                            Click here to Follow the bee
                          </Button>
                        </Stack>
                      </Collapse>
                      <Collapse in={growMessage > 4}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            Just follow me.
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                      <Collapse in={growMessage > 3}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            Very nice name, Nice to meet you {name}!
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                      {nameError.map((item) => (
                        <Collapse in={!!item}>
                          <ChatPoppup>
                            <Typography color="primary.contrastText">
                              {item}
                            </Typography>
                          </ChatPoppup>
                        </Collapse>
                      ))}
                      <Collapse in={growMessage > 0}>
                        <ChatPoppup>
                          <Typography color="primary.contrastText">
                            What can i call you?
                          </Typography>
                        </ChatPoppup>
                      </Collapse>
                      <Collapse in={growMessage > -1}>
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
                    </Stack>
                  </Collapse>
                )}
              </Stack>
            </Stack>
            <FloatingBee translatePixel={"-30px"} />
          </Stack>
        </Stack>
      </Slide>
    </Stack>
  )
}

export default WelcomeBee
