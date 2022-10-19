import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

export interface HeaderMetaProps {
  title?: string
  description?: string
  image?: string
  imageSummary?: string
  author?: string
}

const header: HeaderMetaProps = {
  title: "Clubee | Sports club automation",
  description: "Automate your sports club with few clicks",
  image:
    "https://dk9pqlttm1g0o.cloudfront.net/2021-09-22-d/images/clubee-logo/logo_colors_outline.svg",
  imageSummary: "Clubee",
}

const HeaderMeta = (props: { data?: HeaderMetaProps }) => {
  const { data } = props
  const head = data || header
  const { pathname } = useRouter()
  return (
    <Head>
      <title>{(data || head).title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={data?.title || head.title} />
      <meta
        name="description"
        content={data?.description || head.description}
      />
      {!!data?.author && <meta name="author" content={data.author} />}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={"https://www.scorechain.com" + pathname}
      />
      <meta property="og:title" content={data?.title || head.title} />
      <meta
        property="og:description"
        content={data?.description || head.description}
      />
      {!!(data || head).image && (
        <meta property="og:image" content={data?.image || head.image} />
      )}

      {!!(data || head).imageSummary && (
        <meta property="twitter:card" content={(data || head).imageSummary} />
      )}
      <meta
        property="twitter:url"
        content={"https://www.scorechain.com" + pathname}
      />
      <meta property="twitter:title" content={data?.title || head.title} />
      <meta
        property="twitter:description"
        content={data?.description || head.description}
      />
      <meta property="twitter:image" content={data?.image || head.image} />
    </Head>
  )
}

export default HeaderMeta
