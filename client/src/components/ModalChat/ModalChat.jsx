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
    console.log();
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
                <div className={styles.chatInModule}>
                  {chat.messages.map(mess => {
                    let avatarPath;
                    if (mess.user_ref.avatar === '/uploads/avatar.png') {
                      avatarPath = `${mess.user_ref.avatar}`;
                    } else {
                      avatarPath = `/uploads/${mess.user_ref.avatar}`;
                    }
                    return (
                      user.id === mess.user_ref._id
                        ?
                        <>
                          <div className={styles.userRR}>
                            <div className={styles.userRight} key={mess._id}>
                              {mess.text}
                            </div>
                          </div>
                          <br />
                        </>
                        :
                        <>
                          <div key={mess._id} className={styles.nonUserDiv}>
                            <div>
                              <span>
                                <img alt="ava" src={avatarPath} className={styles.chatAvatar} />
                              </span>
                              &ensp;
                              <span className={styles.author}>
                                {mess.user_ref.name}:
                              </span>
                            </div>
                            {mess.text}
                          </div>
                          <br />
                        </>
                    )
                  })}
                </div>
                <div className={styles.chatInput}>
                  <input onChange={inputHandler} value={input} />
                  <button onClick={wsPost}>send</button>
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
                {'select Сhat'}
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
