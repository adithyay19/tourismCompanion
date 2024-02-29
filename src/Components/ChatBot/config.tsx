import { createChatBotMessage } from "react-chatbot-kit"; 
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";


const config = {
    initialMessages: [
        createChatBotMessage("Welcome user", {
            loading: true,            
        }),
        
    ],

    

    customStyles: {
        chatButton: {
            backgroundColor: '',
        },

        botMessageBox: {
            backgroundColor: '',
        },

        clientMessageBox: {
            backgroundColor: '#000000',
        },
    },
    
}

export default config;