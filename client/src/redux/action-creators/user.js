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
    const req = await fetch('/auth/signin', {
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
    const req = await fetch('/auth/signup', {
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
    const req = await fetch('/auth/in-session', {
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
