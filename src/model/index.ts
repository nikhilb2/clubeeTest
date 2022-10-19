export interface News {
  id: string
  title: string
  description: string
  image: string
  date: string
  author: string
}

export interface NewsJson {
  [key: string]: News
}

export interface PostNewsParams {
  title: string
  description: string
  image: string
  author: string
}

export type ErrorResponse = {
  error?: string
}
