import {ADD_MESSAGE, SET_NEW_CHAT} from "../types/userChats";
import { SET_NEW_EVENT } from "../types/userEvents";
import {GET_EVENTS, GET_GAMES, GET_TAGS} from "../types/events"
//
// export function createEventThunk(formValue) {
//   const { eventName, eventTextArea, eventPersons, address, game } = formValue
//   const setNewChatActionCreator = (Сhat) => {
//   return { type: SET_NEW_CHAT, payload: Сhat }
// }}


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


export function createEventThunk(formInput) {
  const { eventName, eventTextArea, eventPersons, address, game, category, coordinates } = formInput
  return async (dispatch) => {
    const req = await fetch("/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: eventName, description: eventTextArea, max_participants: eventPersons, address, game, category, coordinates }), // body data type must match "Content-Type" header
      mode: 'cors'
    });
    const res = await req.text();
    console.log(res);
    // dispatch(setNewChatActionCreator(res[0]))
    // dispatch(setNewEventActionCreator(res[1]))
  };
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

      // console.log('TAGS', res.tags)
      dispatch(getTags(res.tags))
    }
  }
}

export const getGamesThunk = (title) => {
  return async (dispatch) => {
    const req = await fetch(`/event/games/${title}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: 'cors'
    })
    const res = await req.json()
    if (res.status === 200) {
      // console.log('GAMES',res.games)
      dispatch(getGames(res.games))
    }
  }
}

