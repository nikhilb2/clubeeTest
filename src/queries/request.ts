import conf from "src/conf"

export interface APIError {
  message: string
  error: string
  status: number
}

type Headers = Record<string, string> | undefined

type BodyType = unknown

export type RequestReturn =
  | { success: true; data: BodyType; pages?: string; status: number }
  | { success: false; message: string; status: number; error?: string }

export type RequestSuccess<T> = { success: true; data: T }
export type RequestFail = { success: false; message: string }
export type RequestReturnParam<T> = RequestSuccess<T> | RequestFail
export type APITYPE = "API" | "BLOG"

/* const fetchWithTimeout = async (resource: string, options = {}) => {
  const timeout = 15000

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })
  clearTimeout(id)
  return response
} */

const request = async (
  url: string,
  method: "POST" | "PUT" | "GET" | "DELETE" | "PATCH",
  body: BodyType | undefined | null,
  headers?: Headers | null
): Promise<RequestReturn> => {
  const decoratedOptions = {
    method,
    headers: Object.assign({}, headers),
    //mode: "no-cors",
    body:
      (method === "POST" ||
        method === "PUT" ||
        method === "DELETE" ||
        method === "PATCH") &&
      body
        ? JSON.stringify(body)
        : undefined,
  }
  decoratedOptions.headers["Accept"] = "application/json"

  /*  decoratedOptions.headers["user"] = JSON.stringify({
    userId: "3080",
    group_id: "4",
  }) */
  if (
    method === "POST" ||
    method === "PUT" ||
    method === "DELETE" ||
    method === "PATCH"
  ) {
    decoratedOptions.headers["Content-Type"] = "application/json"
  }
  let decoratedUrl = url
  const getApiUrl = () => {
    return conf.API_ROOT
  }
  try {
    const response = await fetch(
      `${getApiUrl()}${decoratedUrl}`,
      decoratedOptions as RequestInit
    )
    if (response.status === 200) {
      const json = await response?.json()
      const headers: {
        [key: string]: string
      } = {}
      //@ts-ignore
      for (var pair of response.headers.entries()) {
        headers[pair[0]] = pair[1]
      }

      return {
        success: true,
        data: json,
        status: response.status,
      }
    } else if (response.status === 204) {
      return {
        success: true,
        data: null,
        status: response.status,
      }
    } else {
      const json = await response?.json()
      const apierror: APIError = {
        message: json?.message,
        error: json?.error,
        status: response.status,
      }
      return {
        success: false,
        message: apierror.message,
        error: apierror.error,
        status: response.status,
      }
    }
  } catch (err: any) {
    const apierror: APIError = {
      status: err.code || 0,
      error: (err as string).toString(),
      message: (err as string).toString(),
    }

    return {
      success: false,
      message: apierror.message,
      status: apierror.status,
    }
  }
}

export default request
