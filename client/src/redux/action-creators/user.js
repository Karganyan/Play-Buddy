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

export const updateAvatar = (user) => {
  return {
    type: UPDATE_USER_AVATAR,
    payload: user,
  };
};

const getDbUserEventsActionCreator = (userEvents) => {
  return { type: GET_DB_USER_EVENTS, payload: userEvents }
}

const getDbUserChatsActionCreator = (userChats) => {
  return { type: GET_DB_USER_CHATS, payload: userChats }
}
const outUserEventsActionCreators = () => {
  return { type: OUT_USER_EVENTS }
}

const outUserChatsActionCreator = () => {
  return { type: OUT_USER_CHATS }
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

export const signInGoogleThunk = (history) => {
  return async (dispatch) => {
    const req = await fetch('/user/google', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    const res = await req.json()
    if (res.status === 200) {
      dispatch(getUser(res.user))
      history.push('/map')
    }
  }
}

export const signInVkThunk = (history) => {
  return async (dispatch) => {
    const req = await fetch('/user/auth/vkontakte', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    const res = await req.json()
    console.log(res)
    if (res.status === 200) {
      dispatch(getUser(res.user))
      history.push('/map')
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

export const userInSessionThunk = () => {
  // console.log('userInSession')
  return async (dispatch) => {
    const req = await fetch('/user/in-session', {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors'
    })
    const res = await req.json()
    //console.log("res.user", res);
    if (res.user) {
      dispatch(getUser(res.user))
      dispatch(getDbUserEventsActionCreator(res.userEvents))
      dispatch(getDbUserChatsActionCreator(res.userChats))
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
      dispatch(outUserEventsActionCreators())
      dispatch(outUserChatsActionCreator())
      history.push('/')
    }
  }
}
export const updateUserThunk = (inputs, userId, history) => {

  return async (dispatch) => {
    console.log(inputs)
    const formData = new FormData()

    for (const name in inputs) {
      console.log(inputs[name])
      Array.isArray(inputs[name])
        ? inputs[name].forEach(value => formData.append(name + '[]', value))
        : formData.append(name, inputs[name])

    }
    formData.append('userId', userId);

    console.log([...formData.entries()])

    const req = await fetch('/edit', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      body: formData
    })
    const res = await req.json()
    // console.log(res)
    dispatch(updateUser(res))
    history.push('/profile')
  }
}
