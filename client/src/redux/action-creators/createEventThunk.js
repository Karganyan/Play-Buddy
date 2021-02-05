import { SET_NEW_EVENT } from "../types/userEvents";

export function createEventThunk({ eventName, eventTextArea, eventPersons }) {
  return async (dispatch) => {
    const req = await fetch("/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: eventName, description: eventTextArea, max_participants: eventPersons }), // body data type must match "Content-Type" header
      mode: 'cors'
    });
    const res = await req.json();
    console.log(res);
    dispatch({ type: SET_NEW_EVENT, payload: res })
  };
}
