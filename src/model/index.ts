export interface News {
  id: string
  title: string
  description: string
  image: string
  date: Date
  author: string
}

export interface NewsJson {
  [key: string]: News
}
