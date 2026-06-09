import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }) {


  const [inputText, setInputText] = useState('');


  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText.trim() === '') {
      return
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];
    setIsLoading(true)
    setChatMessages(newChatMessages);

    setInputText('');
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setIsLoading(false);

  }

  function keyPresss(event) {
    if (event.key === 'Enter' && !isLoading) {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    } else if(event.key === 'F2') {
      setChatMessages([]);
    }
  } 

  function clearChatMessages(){
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyPresss}
        className="chat-input"
      />
      <button
        className="send-button"
        onClick={sendMessage}
      >Send</button>
      <button
        className='send-button'
        onClick={clearChatMessages}
      >
        Clear 
      </button>
    </div>
  );
}