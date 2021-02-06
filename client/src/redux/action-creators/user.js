import { GET_USER, UPDATE_USER_DATA, LOGOUT_USER } from "../types/user"
import { GET_DB_USER_CHATS, OUT_USER_CHATS } from "../types/userChats"
import { GET_DB_USER_EVENTS, OUT_USER_EVENTS } from "../types/userEvents"

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}

export const logoutUser = (user) => {
  return {
    type: LOGOUT_USER,
    payload: user
  }
}

export const updateUser = (user) => {
  return {
    type: UPDATE_USER_DATA,
    payload: user
  }
}


//----------------------------THUNK---------------------------------


export const signInThunk = (inputValue, history) => {
  return async (dispatch) => {
    const req = await fetch('/user/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue),
      mode: 'cors'
    })
    const res = await req.json()

    if (res.status === 200) {
      dispatch(getUser(res.user))
      history.push('/')
    }
  }
}

export const signUpThunk = (inputValue, history) => {
  return async (dispatch) => {
    const req = await fetch('/user/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue),
      mode: 'cors'
    })
    const res = await req.json()

    if (res.status === 200) {
      dispatch(getUser(res.user))
      history.push('/')
    }
  }
}

export const userInSessionThunk = () => {
  return async (dispatch) => {
    const req = await fetch('/user/in-session', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    const res = await req.json()
    if (res.user) {
      dispatch(getUser(res.user))
      dispatch({ type: GET_DB_USER_EVENTS, payload: res.userEvents })
      dispatch({ type: GET_DB_USER_CHATS, payload: res.userChats })
    }
  }
}

export const userLogoutThunk = (history) => {
  return async (dispatch) => {
    const req = await fetch('/user/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    if (req.status === 200) {
      dispatch(logoutUser({}))
      dispatch({ type: OUT_USER_EVENTS })
      dispatch({ type: OUT_USER_CHATS })
      history.push('/')
    }
  }
}
export const updateUserThunk = (inputs, userId, history) => {
  return async (dispatch) => {
    const req = await fetch('/edit', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ inputs, userId })
    })
    const res = await req.json()
      dispatch(updateUser(res))
      history.push('/')
  }
}
