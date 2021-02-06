import { GET_DB_USER_CHATS, OUT_USER_CHATS, SET_NEW_CHAT } from "../types/userChats";

const userChatsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DB_USER_CHATS:
      return action.payload
    case SET_NEW_CHAT:
      return [...state, action.payload];
    case OUT_USER_CHATS:
      return [];
    default:
      return state
  }
}

export default userChatsReducer;
