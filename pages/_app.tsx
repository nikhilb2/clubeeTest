import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"
import { CssBaseline, Stack } from "@mui/material"
import AnimatedClubeeLogo from "src/components/common/animatedClubeeLogo"
import { useRouter } from "next/router"
import CreateNews from "src/components/common/createNewsButton"

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <ThemeProvider theme={theme}>
      {asPath !== "/" && <AnimatedClubeeLogo />}
      <CssBaseline /> <Component {...pageProps} />
      <CreateNews />
    </ThemeProvider>
  )
}

export default MyApp
