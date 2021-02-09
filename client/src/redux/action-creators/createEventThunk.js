import { ADD_MESSAGE, SET_NEW_CHAT } from "../types/userChats";
import { SET_NEW_EVENT } from "../types/userEvents";
import { GET_EVENTS, GET_GAMES, GET_TAGS } from "../types/events"
//
// export function createEventThunk(formValue) {
//   const { eventName, eventTextArea, eventPersons, address, game } = formValue
const setNewChatActionCreator = (chat) => {
  return { type: SET_NEW_CHAT, payload: chat }
}


export const getTags = (tags) => {
  return {
    type: GET_TAGS,
    payload: tags
  }
}
export const getGames = (games) => {
  return {
    type: GET_GAMES,
    payload: games
  }
}

const setNewEventActionCreator = (event) => {
  return { type: SET_NEW_EVENT, payload: event }
}

export const addMessageActionCreator = (data) => {
  return { type: ADD_MESSAGE, payload: data }
}


export function createEventThunk(formInput, history) {
  const { title, address, category, game, description, max_participants, coordinates, thumbnail } = formInput
  return async (dispatch) => {
    const req = await fetch("/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, address, category, game, description, max_participants, coordinates, thumbnail }), // body data type must match "Content-Type" header
      mode: 'cors'
    })
    const res = await req.json();
    dispatch(setNewChatActionCreator(res[0]))
    dispatch(setNewEventActionCreator(res[1]))
    history.push('/home')
  }
}

export const getTagsThunk = () => {
  return async (dispatch) => {
    const req = await fetch("/event/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors'
    })
    const res = await req.json()
    if (res.status === 200) {
      dispatch(getTags(res.tags))
    }
  }
}

export const getGamesThunk = (title) => {
  return async (dispatch) => {
    const req = await fetch(`/event/games/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors'
    })
    const res = await req.json()
    if (res.status === 200) {
      dispatch(getGames(res.games))
    }
  }
}

