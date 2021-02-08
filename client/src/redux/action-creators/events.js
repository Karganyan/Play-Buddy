import { GET_CURRENT_EVENT, GET_EVENTS } from "../types/events"

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
