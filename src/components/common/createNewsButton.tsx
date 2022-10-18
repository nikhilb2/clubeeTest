import { Fab, Box, Typography, Stack, Button, Collapse } from "@mui/material"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import SimpleModal from "../modals/simpleModal"
import Image from "next/image"
import SimpleInput from "../inputs/simpleInput"
const CreateNews = () => {
  const [image, setImage] = useState<number | undefined>()
  const [imageError, setImageError] = useState("")
  const [showCreateNews, setShowCreateNews] = useState(false)
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState("")
  const [author, setAuthor] = useState("")
  const [authorError, setauthorError] = useState("")
  const [description, setDescription] = useState("")
  const [descriptionError, setDescriptionError] = useState("")

  const validateForm = useCallback(() => {
    if (title.length < 5) {
      setTitleError("Title should be atleast 5 characters long")
    }
    if (description.length < 200) {
      setDescriptionError("Description should be atleast 200 characters")
    }

    if (!image) {
      setImageError("Please select an image")
    }
  }, [image, title, description])

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
  }, [image, title, description])

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
        onClose={() => setShowCreateNews(false)}
      >
        <Stack width={700}>
          <Typography variant="h5">Create news</Typography>
          <Typography variant="caption">Fill in the details below.</Typography>
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
              value={author}
              onChange={(text) => setAuthor(text)}
              placeholder="Enter the news title here."
              error={authorError}
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
          <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
            <Button
              variant="contained"
              onClick={() => {
                validateForm()
              }}
            >
              Accept
            </Button>
            <Button variant="outlined" onClick={() => setShowCreateNews(false)}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </SimpleModal>
    </>
  )
}

export default CreateNews
