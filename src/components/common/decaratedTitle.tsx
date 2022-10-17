import React from "react"
import { Stack, styled, Box } from "@mui/system"
import { Typography } from "@mui/material"
import theme from "src/theme"

const Bar = styled(Box)({
  height: "3px",
  width: "100px",
  backgroundColor: theme.palette.secondary.main,
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
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      />
      <Typography textAlign="center" fontSize="20px" p={2} fontWeight={500}>
        {title}
      </Typography>
      <Bar
        sx={{
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      />
    </Stack>
  )
}

export default DecoratedTitle
