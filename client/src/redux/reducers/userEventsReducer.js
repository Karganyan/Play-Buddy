import { GET_DB_USER_EVENTS } from "../types/userEvents";

const userEventsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DB_USER_EVENTS:
      return action.payload
    default:
      return state
  }
}

export default userEventsReducer;
