import * as React from "react"
import Box from "@mui/material/Box"

import Modal from "@mui/material/Modal"
import { IconButton, Stack } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.default",
  boxShadow: 24,
  p: 4,
}

interface SimpleModalProps {
  open: boolean
  onClose(): void
  children: React.ReactNode
}
export default function SimpleModal(props: SimpleModalProps) {
  const { open, onClose, children } = props

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {children}
        <Box position="absolute" top={3} right={3}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  )
}
