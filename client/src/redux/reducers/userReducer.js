import { GET_USER, LOGOUT_USER } from "../types/user"

const userReducer= (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload
    case LOGOUT_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer
