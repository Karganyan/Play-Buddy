import { useState } from "react";
import ReactDOM from "react-dom";
const wsClient = new WebSocket('ws://localhost:8080')


function ModalCHat({ chat, setEvents }) {
  const [input, setInput] = useState('');


  const inputHandler = ({ target }) => {
    setInput(target.value)
  }

  wsClient.onopen = () => {
    console.log('open');
  }

  const wsPost = () => {
    wsClient.send(JSON.stringify({ mess: input, chatId: chat.id }))
    setInput('');
  }

  wsClient.onmessage = (message) => {
    const myMessage = JSON.parse(message.data);
    setEvents(pre =>{
      return (
        pre.map((event) => {
          return (
            event.chat.id === myMessage.chatId ?
              { ...event, chat: { ...chat, messages: [...chat.messages, { id: Math.random(), author: 'wsdfwef', message: myMessage.mess }] } } :
              event
          )
        })
      )
    })
  }

  return (
    ReactDOM.createPortal(
      <>
        <div className='sdfw'>
          <input onChange={inputHandler} value={input} />
          <button onClick={wsPost}>send</button>
          {chat.messages && chat.messages.map(mess => (
            <div key={mess.id}>{mess.message}</div>
          ))}
        </div>
      </>
      , document.getElementById('portal')
    )
  )
}
export default ModalCHat;
