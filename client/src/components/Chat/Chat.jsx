import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_CHAT } from "../../redux/types/modalChat";
import ModalCHat from "../ModalChat/ModalChat";
import styles from './Chat.module.css'

function Chat() {
  let [store, setStore] = useState({})
  useEffect(()=>{
    (async()=>{
      await setStore(useSelector(store => {
        console.log(store);
        return store
      }))
      console.log(store);
      if (store.userChats?.length<1) {
        console.log(localStorage.getItem('store'));
        setStore(localStorage.getItem('store'))
        console.log(store);
      } else {
        localStorage.setItem('store', JSON.stringify(store));
      }
    })()

  },[])


  const dispatch = useDispatch()
  const chatHandler = (id) => {
    dispatch({ type: SET_MODAL_CHAT, payload: id })
  }
  return (
    <>
      <div className={styles.chatConteiner}>
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
export default Chat;
