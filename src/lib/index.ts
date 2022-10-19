import moment from "moment"

export const apiBodyValidator = (body: any) => {
  const { title, author, description, image } = body
  let error = ""
  if (!title) {
    error = "title"
  }
  if (!author) {
    error += ", author"
  }
  if (!description) {
    error += ", description"
  }
  if (!image) {
    error += ", image"
  }
  if (error) {
    error += "missing"
  }
  return error
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

export const formatDate = (date: string) => {
  return moment(date).format("D MMM YYYY, HH:mm")
}
