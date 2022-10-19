import { Stack } from "@mui/system"
import Image from "next/image"
import { useMemo } from "react"

interface FloatingBeeProps {
  translatePixel?: string
}

const FloatingBee = (props: FloatingBeeProps) => {
  const { translatePixel } = props
  const animation = useMemo(() => {
    return {
      transform: "translatey(0px)",
      animation: "float 6s ease-in-out infinite",
      "@keyframes float": {
        "0%": {
          transform: "translatey(0px);",
        },
        "50%": {
          transform: `translatey(${translatePixel || "-10px"})`,
        },
        "100%": {
          transform: "translatey(0px)",
        },
      },
    }
  }, [translatePixel])
  return (
    <Stack sx={animation}>
      <Image
        priority
        src="/img/bee.svg"
        width="100px"
        height={"100px"}
        alt="bee"
      />
    </Stack>
  )
}

export default FloatingBee
