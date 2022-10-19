import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"
import { CssBaseline } from "@mui/material"
import AnimatedClubeeLogo from "src/components/common/animatedClubeeLogo"
import { useRouter } from "next/router"
import { QueryClientProvider, useQuery } from "react-query"
import { queryClient } from "src/queries"
import cacheKeys from "src/queries/cacheKeys"
import { getUserNameFromLocalStorage } from "src/queries/auth"
import dynamic from "next/dynamic"
import { CreateNewsProps } from "src/components/common/createNewsButton"

const CreateNews = dynamic(
  () => import("src/components/common/createNewsButton"),
  {
    ssr: false,
  }
) as React.FunctionComponent<CreateNewsProps>

const Comp = (props: AppProps) => {
  const { Component, pageProps } = props
  const { asPath } = useRouter()
  const { data: userName } = useQuery(
    cacheKeys.userNameKey(),
    getUserNameFromLocalStorage
  )
  return (
    <ThemeProvider theme={theme}>
      {asPath !== "/" && <AnimatedClubeeLogo />}
      <CssBaseline />
      <Component {...pageProps} userName={userName} />
      <CreateNews userName={userName || ""} />
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
