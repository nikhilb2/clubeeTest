import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"
import { CssBaseline, Stack } from "@mui/material"
import AnimatedClubeeLogo from "src/components/common/animatedClubeeLogo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedClubeeLogo start={true} />
      <CssBaseline /> <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
