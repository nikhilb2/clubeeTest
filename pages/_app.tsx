import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"
import { CssBaseline, Stack } from "@mui/material"
import AnimatedClubeeLogo from "src/components/common/animatedClubeeLogo"
import { useRouter } from "next/router"
import CreateNews from "src/components/common/createNewsButton"
import { QueryClientProvider, useQuery } from "react-query"
import { queryClient } from "src/queries"
import cacheKeys from "src/queries/cacheKeys"
import { getUserNameFromLocalStorage } from "src/queries/auth"

const Comp = (props: AppProps) => {
  const { Component, pageProps } = props
  const { asPath, push } = useRouter()
  const { data: userName } = useQuery(
    cacheKeys.userNameKey(),
    getUserNameFromLocalStorage,
    {
      onSuccess: (result) => {
        if (asPath !== "/" && !result) {
          push("/")
        }
      },
    }
  )
  return (
    <ThemeProvider theme={theme}>
      {asPath !== "/" && <AnimatedClubeeLogo />}
      <CssBaseline />
      <Component {...pageProps} userName={userName} />
      {!!userName && <CreateNews userName={userName} />}
    </ThemeProvider>
  )
}

function MyApp(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <Comp {...props} />
    </QueryClientProvider>
  )
}

export default MyApp
