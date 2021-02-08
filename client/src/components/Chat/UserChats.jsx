import { useEffect } from "react";
import { useSelector } from "react-redux";
import ModalCHat from "../ModalChat/ModalChat";

function UserChats() {
  const userChats = useSelector(state => state.userChats)

  return (
    <div>
      <h1>This is chats!</h1>
      {userChats
        ?
        userChats.map(item => (
          <div key={item._id}>
            {item.eventTitle}
          </div>
        ))
        :
        'there are no chats here yet'}
    </div>
  )
}
export default UserChats;
