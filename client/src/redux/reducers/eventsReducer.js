import {GET_EVENTS, GET_GAMES, GET_TAGS} from "../types/events"

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {...state, event: action.payload}
    case GET_TAGS:
      return  {...state, tags : action.payload}
    case GET_GAMES:
      return  {...state, games : action.payload}
    default:
      return state
  }
}

export default eventsReducer


