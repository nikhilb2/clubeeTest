import React from "react"
import { Stack, styled, Box } from "@mui/system"
import { Typography } from "@mui/material"
import theme from "src/theme"

const Bar = styled(Box)({
  height: "7px",
  width: "100px",
  backgroundColor: theme.palette.primary.main,
})

interface DecoratedTitleProps {
  title: string
}

const DecoratedTitle = (props: DecoratedTitleProps) => {
  const { title } = props
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Bar
        sx={{
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
        }}
      />
      <Typography textAlign="center" fontSize="20px" p={2} fontWeight={500}>
        {title}
      </Typography>
      <Bar
        sx={{
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "50%",
        }}
      />
    </Stack>
  )
}

export default DecoratedTitle
