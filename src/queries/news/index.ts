import { News, PostNewsParams } from "src/model"
import request from "../request"

export const postNews = async (params: PostNewsParams) => {
  const result = await request("news", "POST", params)
  if (result.success) {
    return result.data as News
  }

  throw new Error(result.error, {
    cause: new Error(result.message),
  })
}

export const getNews = async () => {
  const result = await request("news", "GET", null)
  if (result.success) {
    return result.data as News[]
  }
  console.log(result)

  throw new Error(result.error, {
    cause: new Error(result.message),
  })
}

export const getNewsById = async (id: string) => {
  const result = await request(`news/${id}`, "GET", null)
  if (result.success) {
    return result.data as News
  }
  return undefined
}
