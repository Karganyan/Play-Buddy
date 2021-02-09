import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_CHAT } from "../../redux/types/modalChat";
import ModalCHat from "../ModalChat/ModalChat";

function Hat() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const chatHandler = (id) => {
    dispatch({ type: SET_MODAL_CHAT, payload: id })
  }
  return (
    <>
      <div>
        <h1>This is chats!</h1>
        {store.userChats.length
          ?
          store.userChats.map(item => (
            <div key={item._id} onClick={() => chatHandler(item._id)}>
              {item.eventTitle}
            </div>
          ))
          :
          'there are no chats here yet'}
      </div>
      {store.userChats.length ? <ModalCHat /> : null}
    </>
  )
}
export default Hat;
