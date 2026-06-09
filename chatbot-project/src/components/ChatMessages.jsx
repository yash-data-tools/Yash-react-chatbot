import { useRef, useEffect } from "react"
import LoadingSpinnerGIF from '../assets/loading-spinner.gif'
import { ChatMessage } from "./ChatMessage"
import './ChatMessages.css'

function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return chatMessagesRef;

}

export function ChatMessages({ chatMessages, isLoading }) {
  const chatMessagesRef = useAutoScroll(chatMessages);



  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {
        chatMessages.length === 0
          ? (<p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>)
          : <></>
      }
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}

      {isLoading && (
        <ChatMessage
          message={<img src={LoadingSpinnerGIF} className="loading-spinner" />}
          sender="robot"
          key="loading-message"
        />
      )}
    </div>
  )
}
