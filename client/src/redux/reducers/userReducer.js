import { GET_USER, LOGOUT_USER, UPDATE_USER_DATA } from "../types/user"

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      console.log("action", action);
      return action.payload
    case LOGOUT_USER:
      return action.payload
    case UPDATE_USER_DATA:
      const { name, phone, information: info, _id:id } = action.payload
      return {
        name,
        phone,
        info,
        id
      }
    default:
      return state
  }
}


export default userReducer
