import { createChatBotMessage } from "react-chatbot-kit"; 
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Icon } from "@mui/material";
import SmartToy from "@mui/icons-material/SmartToy";

const name = "Companion"

const config = {

    botName: name,    

    initialMessages: [
        createChatBotMessage("Welcome user", {
            loading: true,            
        }),
        
    ],

    

    customComponents: {
        header: () => <div 
            style={{ 
                textAlign: 'center',
                color: "black",
                backgroundColor: 'lightgray', 
                padding: "5px", 
                borderRadius: "4px", 
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 35
            }}>
                Virtual Companion
            </div>,
        
        botAvatar: () => <SmartToyIcon sx={{color: 'pink', border: '5px black', borderColor: 'black'}}/>,

    },

    customStyles: {

        chatButton: {
            backgroundColor: '#5ccc9d',
    
        },

        botMessageBox: {
            backgroundColor: '#376B7E',
        },

        clientMessageBox: {
            backgroundColor: '#000000',
        },

        
    },
    
}

export default config;