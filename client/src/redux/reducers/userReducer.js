import { SET_USER } from "../types/setUser";

const userReducer= (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer;
