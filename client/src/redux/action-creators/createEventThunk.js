import { ADD_MESSAGE, SET_NEW_CHAT } from "../types/userChats";
import { SET_NEW_EVENT } from "../types/userEvents";
import { GET_GAMES, GET_TAGS } from "../types/events"
// import { useDispatch, useSelector } from 'react-redux';


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

export const getUserInput = (input) => {
  return {
    type: FILTER_EVENTS_BY_USER_INPUT,
    payload: input
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
  console.log(title, address, category, game, description, max_participants, coordinates, thumbnail)
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
    history.push(`/event-page/${res[1]._id}`)
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

export const filterEvents = (events, category, history) => {
  return async (dispatch) => {

    return dispatch({
      type: FILTER_EVENTS_BY_CATEGORY,
      payload: {
        category: category,
        events: category === "" ? events : events.filter(a => console.log(a.category))
      }
  })
  }
}


