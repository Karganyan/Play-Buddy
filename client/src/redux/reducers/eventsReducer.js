import { GET_EVENTS, GET_GAMES, GET_TAGS, UPDATE_EVENT } from "../types/events"

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, event: action.payload }
    case GET_TAGS:
      return { ...state, tags: action.payload }
    case GET_GAMES:
      return { ...state, games: action.payload }
    case UPDATE_EVENT:
      return state.map(event => event._id === action.payload._id ? { ...event, participants: [...event.participants, action.payload] } : event)
    default:
      return state
  }
}

export default eventsReducer


