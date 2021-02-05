import { GET_DB_USER_CHATS } from "../types/userChats";

const userChatsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DB_USER_CHATS:
      return action.payload
    default:
      return state
  }
}

export default userChatsReducer;
