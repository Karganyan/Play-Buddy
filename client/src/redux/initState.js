// export const initState = {
//   userChats: [],
//   userEvents: [],
//   user: {},
//   events: {},
//   currentEvent: {},
//   modalChat: '',
// }


const initState = () => {
  const obj = {
    userChats: [],
    userEvents: [],
    user: {},
    events: {},
    currentEvent: {},
    modalChat: '',
    // filterEvents: [],
    // category: ''
  }

  const fromLS = window.localStorage.getItem('store')

  return fromLS ? JSON.parse(fromLS) : obj
}

export default initState()
