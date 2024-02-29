// import { createChatBotMessage } from 'react-chatbot-kit';
// import ActionProvider from "src\Components\ChatBot\ActionProvider.tsx"
import './App.css'
import 'react-chatbot-kit/build/main.css'

// import MapPage from './Routes/MapPage'
import NavBar from './NavBar'
import HomePage from './Routes/HomePage';
import ChatBot from './Components/ChatBot';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar />
      
      <ChatBot/>
      
      <HomePage />

      <Footer/>

    </>
  )
}

export default App;
