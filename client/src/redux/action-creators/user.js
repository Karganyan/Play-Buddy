import { GET_USER } from "../types/user"

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}

export const logoutUser = (user) => {
  return {
    type: GET_USER,
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

export const userInSession = () => {
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
      history.push('/')
    }
  }
}
