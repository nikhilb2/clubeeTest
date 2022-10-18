// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import { promises as fs } from "fs"
import type { NextApiRequest, NextApiResponse } from "next"
import { apiBodyValidator, slugify } from "src/lib"
import { News, NewsJson } from "src/model"

type GetNews = {
  data: News[]
}

type PostNews = {
  data: News
}

type FourHundredFive = {
  error?: string
}
const readFile = async () => {
  const jsonDirectory = path.join(process.cwd(), "/src/api/")
  const file = await fs.readFile(jsonDirectory + "news.json", "utf8")
  return JSON.parse(file) as News[]
}

const writeFile = async (body: {
  title: string
  description: string
  image: string
  author: string
}): Promise<News> => {
  const data = await readFile()
  const { title, description, image, author } = body

  const id = Date.now()
  const news = {
    id: String(id),
    title,
    description,
    image,
    author,
    date: new Date(),
  }
  if (data.length > 4) {
    data.pop()
  }
  data.unshift(news)
  data[id] = news
  const jsonDirectory = path.join(process.cwd(), "/src/api/")
  await fs.writeFile(
    jsonDirectory + "news.json",
    JSON.stringify(data, null, 2),
    "utf-8"
  )
  return news
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetNews | FourHundredFive | PostNews>
) {
  if (req.method === "GET") {
    const data = await readFile()

    res.status(200).json({ data })
    return
  }
  if (req.method === "POST") {
    const bodyError = apiBodyValidator(req.body)
    if (bodyError) {
      res.status(400).send({ error: bodyError })
      return
    }

    const { title, description, image, author } = req.body
    const news = await writeFile({
      title,
      description,
      image,
      author,
    })

    res.status(200).send({ data: news })

    return
  }
  return res.status(405).send({ error: "unsupported http method" })
}
