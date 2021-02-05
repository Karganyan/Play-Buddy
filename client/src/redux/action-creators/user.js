import { GET_USER } from "../types/user"

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}
export const logoutUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}
