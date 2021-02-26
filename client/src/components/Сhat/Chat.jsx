import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { SET_MODAL_CHAT } from "../../redux/types/modalChat";
import ModalCHat from "../ModalChat/ModalChat";
import styles from './Chat.module.css'
import './Chat.css'
import { Link } from "react-router-dom";

function Chat() {
  const { user, userChats, modalChat } = useSelector(store => store)
  const dispatch = useDispatch()
  const history = useHistory()

  const chat = userChats.find(chat => chat._id === modalChat)

  useEffect(() => {
    !user.id && history.push('/signin')
  }, [])

  const chatHandler = (id) => {
    dispatch({ type: SET_MODAL_CHAT, payload: id })
  }

  return (
    <>
      <div className=' wrapper' >
        <div className='d-flex justify-content-between pt-2 hContmain'>
          <Link title='Домой' to='/'>
            <img src='home.svg' className={styles.hamburger} />
          </Link>
          <div className={styles.headCont}>
            <h4>ЧАТЫ СОБЫТИЙ</h4>
            <h3 className='titles'>{chat && chat.eventTitle}</h3>
          </div>
        </div>
        <div className={styles.chatsConteiner}>
          {userChats.length
            ?
            <ul className="list-group">
              {userChats.map(item => (
                <li className="list-group-item chatsss" key={item._id} onClick={() => chatHandler(item._id)}>{item.eventTitle}</li>
              ))}
            </ul>
            :
            'Здесь пока нет чатов'}
        </div>
        {userChats.length ? <ModalCHat /> : null}
      </div>
    </>
  )
}
export default Chat;
