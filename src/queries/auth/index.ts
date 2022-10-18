import { queryClient } from ".."
import cacheKeys from "../cacheKeys"

export const setUserNameInCacheAndLocalStorage = (name: string) => {
  localStorage.setItem(cacheKeys.userNameKey(), name)
  queryClient.setQueryData(cacheKeys.userNameKey(), name)
}

export const getUserNameFromLocalStorage = (): string | null => {
  return localStorage.getItem(cacheKeys.userNameKey())
}
