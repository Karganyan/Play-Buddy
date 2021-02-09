import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageActionCreator } from "../../redux/action-creators/createEventThunk";
import styles from './ModalChat.module.css'

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
        <div className={styles.chatModule}>
          {chat
            ?
            (chat.messages.length
              ?
              <>
                <div>
                  {chat.eventTitle}
                  <div className={styles.chatInModule}>
                    {chat.messages.map(mess => {
                      return (
                        user.id === mess.user_ref
                          ?
                          <div className={styles.userRight} key={mess._id}>{mess.text}</div>
                          :
                          <div key={mess._id}>{mess.text}</div>
                      )
                    })}
                  </div>
                  <div className={styles.chatInput}>
                    <input onChange={inputHandler} value={input} />
                    <button onClick={wsPost}>send</button>
                  </div>
                </div>
              </>
              :
              (
                <>
                  {chat.eventTitle}
                  <br />
                  <div className={styles.chatInput}>
                    <input onChange={inputHandler} value={input} />
                    <button onClick={wsPost}>send</button>
                  </div>
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
