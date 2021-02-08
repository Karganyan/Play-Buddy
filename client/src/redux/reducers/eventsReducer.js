import { GET_EVENTS, UPDATE_EVENT } from "../types/events"

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload
    case UPDATE_EVENT:
      return state.map(event => event._id === action.payload._id ? { ...event, participants: [...event.participants, action.payload] } : event)
    default:
      return state
  }
}

export default eventsReducer


