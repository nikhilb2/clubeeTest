import { NewsJson, News } from "src/model"
import { getNews } from "src/queries/news"

export const newsCache: NewsJson = {}

export const getNewsFromCache = () => {
  return Object.values(newsCache)
}

export const fetchNewsAndAddToCache = async (): Promise<News[]> => {
  try {
    const news = await getNews()
    if (news.length) {
      news.forEach((item) => {
        newsCache[item.id] = item
      })
    }
    console.log("returned from cache")

    return news || []
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getNewsFromCacheAndSync = async (): Promise<News[]> => {
  const cached = await getNewsFromCache()
  if (cached.length) {
    fetchNewsAndAddToCache()
    return cached
  }
  return await fetchNewsAndAddToCache()
}
