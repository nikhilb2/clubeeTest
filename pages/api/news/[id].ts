import type { NextApiRequest, NextApiResponse } from "next"
import { ErrorResponse, News } from "src/model"
import path from "path"
import { promises as fs } from "fs"

const readFile = async () => {
  const jsonDirectory = path.join(process.cwd(), "/src/api/")
  const file = await fs.readFile(jsonDirectory + "news.json", "utf8")
  return JSON.parse(file) as News[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News | ErrorResponse>
) {
  if (req.method === "GET") {
    const data = await readFile()
    console.log(req.query)

    const news = data.find((item) => item.id === req.query.id)

    if (!news) {
      res.status(404).send({ error: "not found" })
      return
    }
    res.status(200).json(news)
    return
  }

  return res.status(405).send({ error: "unsupported http method" })
}
