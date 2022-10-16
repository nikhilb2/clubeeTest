import { Stack, styled } from "@mui/system"
import Image from "next/image"

const FloatingHolder = styled(Stack)({
  transform: "translatey(0px)",
  animation: "float 6s ease-in-out infinite",
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px);",
    },
    "50%": {
      transform: "translatey(-20px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
})

const FloatingBee = () => {
  return (
    <FloatingHolder>
      <Image priority src="/img/bee.svg" width="100px" height={"100px"} />
    </FloatingHolder>
  )
}

export default FloatingBee
