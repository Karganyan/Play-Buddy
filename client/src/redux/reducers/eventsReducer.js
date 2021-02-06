import { GET_CURRENT_EVENT, GET_EVENTS } from "../types/events"

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload
    case GET_CURRENT_EVENT:
    default:
      return state
  }
}

export default eventsReducer


