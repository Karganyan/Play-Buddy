import { GET_EVENTS, GET_GAMES, GET_TAGS, UPDATE_EVENT, FILTER_EVENTS_BY_USER_INPUT } from "../types/events"

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, event: action.payload }
    case GET_TAGS:
      return { ...state, tags: action.payload }
    case GET_GAMES:
      return { ...state, games: action.payload }
    case UPDATE_EVENT:
      return {
        ...state,
        event: state.event.map(event => event._id === action.payload._id
          ?
          { ...event, participants: [...event.participants, action.payload] }
          :
          event)
      }
    case FILTER_EVENTS_BY_USER_INPUT:
      // console.log(action.payload);
      console.log(state.event, action.payload.length );
      return {
        ...state,
        event: 
        action.payload.length ?
            [...state.event].filter(e => {
            console.log(state.event);
            return e.title.toLowerCase().includes(action.payload.toLowerCase())
          })
          :
        state.event
      }


    default:
      return state
  }
}

export default eventsReducer


