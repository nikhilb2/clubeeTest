import { Stack } from "@mui/system"
import Lottie from "lottie-react"
import React from "react"
import * as animation from "src/lottie/starryBack.json"

const StarryBack = () => {
  return (
    <Stack
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
      }}
    >
      <Lottie animationData={animation} loop={true} />
    </Stack>
  )
}

export default StarryBack
