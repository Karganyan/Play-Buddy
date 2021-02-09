import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageActionCreator } from "../../redux/action-creators/createEventThunk";
import styles from "./ModalChat.module.css";
const wsClient = new WebSocket('ws://localhost:1234')


function ModalCHat() {
  const { userChats, modalChat, user } = useSelector(store => store)
  const dispatch = useDispatch()
  const chat = userChats.find(chat => chat._id === modalChat)
  const [input, setInput] = useState('');
  const inputHandler = ({ target }) => {
    setInput(target.value)
  }

  wsClient.onopen = () => {
    console.log('open');
  }

  const wsPost = () => {
    wsClient.send(JSON.stringify({ mess: input, chatId: chat._id, userId: user.id }))
    setInput('');
  }

  wsClient.onmessage = (message) => {
    const { newMess, chatId } = JSON.parse(message.data);
    dispatch(addMessageActionCreator({ newMess, chatId }))
  }

  return (
    ReactDOM.createPortal(
      <>
        <div style={{ border: '1px solid black', width: 400, height: 500, margin: 'auto', padding: '10px' }}>
          {chat
            ?
            (chat.messages.length
              ?
              <>
                <div>
                  {chat.eventTitle}
                  <br />
                  {(chat.messages.map(mess => (
                    <div key={mess._id}>{mess.text}</div>
                  )))}
                  <input onChange={inputHandler} value={input} />
                  <button onClick={wsPost}>send</button>
                </div>
              </>
              :
              (
                <>
                  {chat.eventTitle}
                  <br />
                  <input onChange={inputHandler} value={input} />
                  <button onClick={wsPost}>send</button>
                  <div>
                    <br />
                    {'there are no messages here yet'}
                  </div>
                </>
              ))
            :
            (
              <div>
                {'select chat'}
              </div>
            )
          }
        </div>
      </>
      , document.getElementById('portal')
    )
  )
}
export default ModalCHat;
