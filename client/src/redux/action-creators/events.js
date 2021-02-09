import { GET_CURRENT_EVENT, GET_EVENTS, UPDATE_EVENT } from "../types/events"
import { SET_NEW_CHAT } from "../types/userChats"
import { SET_NEW_EVENT } from "../types/userEvents"

export const getEvents = (events) => {
  return {
    type: GET_EVENTS,
    payload: events
  }
}
export const getCurrentEvent = (event) => {
  return {
    type: GET_CURRENT_EVENT,
    payload: event
  }
}

//----------------------------THUNK---------------------------------

export const getEventsThunk = () => {
  return async (dispatch) => {
    const req = await fetch('/event', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
    const res = await req.json()
    if (res) {
      dispatch(getEvents(res))
    }
  }
}

export const getCurrentEventThunk = (id) => {
  return async (dispatch) => {
    const req = await fetch(`/event/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    const res = await req.json()
    if (res) {
      dispatch(getCurrentEvent(res))
    }
  }
}

export const joinEventThunk = ({ userId, eventId }) => {
  return async (dispatch) => {
    const ftch = await fetch(`/event/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        eventId,
      }),
      mode: 'cors'
    })
    const result = await ftch.json()
    console.log(result.chat);
    dispatch({ type: UPDATE_EVENT, payload: result.event })
    dispatch({ type: SET_NEW_EVENT, payload: result.event })
    dispatch({ type: SET_NEW_CHAT, payload: result.chat })
  }
}
