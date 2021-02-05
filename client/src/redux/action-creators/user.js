import { GET_USER, UPDATE_USER_DATA, LOGOUT_USER } from "../types/user"

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
  console.log('signInThunk')
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
  console.log('asdadsa')
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
  console.log('userInSession')
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
    console.log(res.user)
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
export const updateUserThunk = (inputs, userId, history) => {
  return async (dispatch) => {
    const req = await fetch('/edit', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({inputs, userId})
    })
    const res = await req.json()
    console.log(res)
      dispatch(updateUser(res))
      history.push('/')
  }
}
