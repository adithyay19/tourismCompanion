

import axios from "axios";

class ActionProvider {
    createChatBotMessage : any;
    setState : any;
    
    constructor(createChatBotMessage: any, setStateFunc: any) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    async greetFunc(userMessage: any) {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/chatbot', { message: userMessage });
            console.log(`Status: ${response.status}`);
            
            const botMessage = this.createChatBotMessage(response.data.response);
            this.updateChatbotState(botMessage);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    updateChatbotState(message: any) {
        this.setState((prevState: { messages: any; }) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;
