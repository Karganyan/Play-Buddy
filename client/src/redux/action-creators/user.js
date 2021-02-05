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
    const req = await fetch('http://localhost:3001/auth/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue)
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
    const req = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue)
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
    const req = await fetch('http://localhost:3001/auth/in-session', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      }
    })
    const res = await req.json()
    dispatch(getUser(res))
  }
}


export const updateUserThunk = (inputs, userId, history) => {
  console.log(inputs);

  return async (dispatch) => {
    const ftch = await fetch('http://localhost:3001/edit', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ inputs, userId }),
    });
    const response = await ftch.json();
    console.log(response);
    dispatch(updateUser(response))
    // history.push('/')
  }
}
