import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'
import { Chatbot } from 'supersimpledev'


function App() {



  useEffect(() => {
    Chatbot.addResponses({
      "hi": "Hello! 👋",
      "hello": "Hello there!",
      "hey": "Hey! 👋",

      "how are you": "I'm doing great! How about you?",

      "thanks": "You're welcome! 😊",
      "thank you": "Glad I could help!",

      "bye": "Goodbye! Have a great day! 👋",
      "goodbye": "See you later!",

      "good morning": "Good morning! ☀️",
      "good afternoon": "Good afternoon!",
      "good evening": "Good evening!",
      "good night": "Good night! 🌙",

      "who are you": "I'm a chatbot created by Yash 😎",
      "your name": "My name is Yash Bot 🤖",

      "what can you do": "I can chat, roll dice, flip coins, and answer simple questions!",

      "help": "Try saying hi, asking my name, rolling a dice, or flipping a coin.",

      "idk": "What do you mean by idk?",

      "lol": "😂",
      "haha": "Glad you're laughing! 😆",

      "i am happy": "That's awesome! 🎉",
      "i am sad": "I'm sorry to hear that. Things will get better ❤️",

      "react": "React is a JavaScript library for building user interfaces.",
      "javascript": "JavaScript makes websites interactive.",
      "c++": "C++ is a powerful programming language.",

      "pokemon": "Gotta catch 'em all! ⚡",

      "yash": "That's my creator! 🔥",
      "duggu": "Woof woof! 🐶 Duggu is awesome.",
      "favorite pet": "Duggu 🐶",

      "joke": () => {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
          "There are only 10 types of people: those who understand binary and those who don't. 😆",
          "A SQL query walks into a bar and asks: 'Can I join you?' 🤣"
        ];

        return jokes[Math.floor(Math.random() * jokes.length)];
      }
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  // const [chatMessages , setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessage = array[1];
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages]);


  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
        isLoading={isLoading}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App
