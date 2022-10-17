import { Fab, Box } from "@mui/material"
import React from "react"
import AddIcon from "@mui/icons-material/Add"
const CreateNews = () => {
  return (
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
      <Fab>
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default CreateNews
