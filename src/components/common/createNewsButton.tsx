import {
  Fab,
  Box,
  Typography,
  Stack,
  Button,
  Collapse,
  CircularProgress,
} from "@mui/material"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import SimpleModal from "../modals/simpleModal"
import Image from "next/image"
import SimpleInput from "../inputs/simpleInput"
import { useMutation } from "react-query"
import { PostNewsParams } from "src/model"
import { postNews } from "src/queries/news"
import Lottie, { LottieRef, LottieRefCurrentProps } from "lottie-react"
import * as animation from "src/lottie/successful.json"
import { queryClient } from "src/queries"
import cacheKeys from "src/queries/cacheKeys"

export interface CreateNewsProps {
  userName: string
}

const CreateNews = (props: CreateNewsProps) => {
  const { userName } = props
  const [image, setImage] = useState<number | undefined>()
  const [imageError, setImageError] = useState("")
  const [showCreateNews, setShowCreateNews] = useState(false)
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState("")
  const [author, setAuthor] = useState(userName)
  const [authorError, setauthorError] = useState("")
  const [description, setDescription] = useState("")
  const [descriptionError, setDescriptionError] = useState("")

  const validateForm = useCallback(() => {
    let status = true
    if (title.length < 5) {
      setTitleError("Title should be atleast 5 characters long")
      status = false
    }
    if (description.length < 200) {
      setDescriptionError("Description should be atleast 200 characters long.")
      status = false
    }

    if (!image) {
      setImageError("Please select an image")
      status = false
    }

    if (author.length < 3) {
      setImageError("Author should be atleast 3 characters long. ")
      status = false
    }

    return status
  }, [image, title, description, author])

  useEffect(() => {
    if (title.length >= 5) {
      setTitleError("")
    }
    if (description.length >= 200) {
      setDescriptionError("")
    }

    if (image) {
      setImageError("")
    }
    if (author.length >= 3) {
      setauthorError("")
    }
  }, [image, title, description, author])

  const {
    mutate: mutatePostNews,
    isSuccess,
    reset,
    isLoading,
  } = useMutation(
    (params: PostNewsParams) => {
      return postNews(params)
    },
    {
      onSuccess: () => {
        setTimeout(() => {
          animationRef.current?.play()
        }, 500)
        queryClient.invalidateQueries(cacheKeys.homePageNews())
      },
    }
  )

  const resetForm = useCallback(() => {
    setTitle("")
    setDescription("")
    setImage(undefined)
    reset()
  }, [reset])

  const animationRef = useRef<LottieRefCurrentProps>(null)

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: {
            xs: undefined,
            md: 20,
          },
          bottom: {
            xs: 20,
            md: undefined,
          },
          right: 20,
        }}
      >
        <Fab onClick={() => setShowCreateNews(true)}>
          <AddIcon />
        </Fab>
      </Box>
      <SimpleModal
        open={showCreateNews}
        onClose={() => {
          setShowCreateNews(false)
          resetForm()
        }}
      >
        <Stack width={700}>
          <Collapse in={!isSuccess}>
            <Typography variant="h5">Create news</Typography>
            <Typography variant="caption">
              Fill in the details below.
            </Typography>
            <Stack mt={2} spacing={2}>
              <SimpleInput
                label="Title"
                value={title}
                onChange={(text) => setTitle(text)}
                placeholder="Enter the news title here."
                error={titleError}
              />

              <SimpleInput
                label="Author name"
                error={authorError}
                value={author}
                onChange={(text) => setAuthor(text)}
              />

              <SimpleInput
                label="Description"
                error={descriptionError}
                onChange={(text) => setDescription(text)}
                multiline={true}
                placeholder="Enter a long description here."
              />

              <Stack direction="row" alignItems={"center"} spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => setImage(Math.random())}
                >
                  Click here
                </Button>
                <Typography>to select random image</Typography>
                <Collapse in={!!imageError}>
                  <Typography color="error" variant="caption">
                    {imageError}
                  </Typography>
                </Collapse>
              </Stack>
              <Collapse in={!!image}>
                <Stack height="200px" width="300px">
                  {!!image && (
                    <Image
                      alt={"image"}
                      src={`https://loremflickr.com/1000/500/sports?random=${image}`}
                      width="300px"
                      height="200px"
                      priority
                      objectFit="cover"
                    />
                  )}
                </Stack>
              </Collapse>
            </Stack>
            {isLoading ? (
              <Stack alignItems={"center"} height="50px">
                <CircularProgress />
              </Stack>
            ) : (
              <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (validateForm()) {
                      mutatePostNews({
                        title,
                        description,
                        image: `https://loremflickr.com/1000/500/sports?random=${image}`,
                        author,
                      })
                    }
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setShowCreateNews(false)}
                >
                  Cancel
                </Button>
              </Stack>
            )}
          </Collapse>
          <Collapse in={isSuccess}>
            <Stack alignItems={"center"} spacing={3}>
              <Stack width={200}>
                <Lottie
                  lottieRef={animationRef}
                  animationData={animation}
                  loop={false}
                  autoplay={false}
                />
              </Stack>
              <Typography>Hurray! News has been added.</Typography>
              <Button
                onClick={() => {
                  resetForm()
                  setShowCreateNews(false)
                }}
                sx={{
                  width: "fit-content",
                }}
              >
                Close
              </Button>
            </Stack>
          </Collapse>
        </Stack>
      </SimpleModal>
    </>
  )
}

export default CreateNews
