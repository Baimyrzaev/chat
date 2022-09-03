import { baseApi } from "../../../configs"

export const postUser = (data, uid) => {
  return baseApi.put(`/users/${uid}.json`, data)
}