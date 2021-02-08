import { SET_NEW_CHAT } from "../types/userChats";
import { SET_NEW_EVENT } from "../types/userEvents";

export function createEventThunk(formValue) {
  const { eventName, eventTextArea, eventPersons, address, game } = formValue
  return async (dispatch) => {
    const req = await fetch("/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: eventName, description: eventTextArea, max_participants: eventPersons, address, game }), // body data type must match "Content-Type" header
      mode: 'cors'
    });
    const res = await req.json();
    console.log('======>>',res);
    dispatch({ type: SET_NEW_CHAT, payload: res[0] })
    dispatch({ type: SET_NEW_EVENT, payload: res[1] })
  };
}
