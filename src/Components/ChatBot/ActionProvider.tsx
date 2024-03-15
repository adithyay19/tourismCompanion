import axios from "axios";

let answer = "";

const fetchData = async () => {
    try {
      const response = await axios.get('http://your-flask-api-endpoint.com/data');
      console.log(response.data);
      answer = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


class ActionProvider {
    createChatBotMessage: any;
    setState: any;
    
    constructor(
        createChatBotMessage: any,
        setStateFunc: any,
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greetFunc() {
        fetchData();
        const botMessage = this.createChatBotMessage(answer);
        this.updateChatbotState(botMessage);
    }

    updateChatbotState(message: any) {
        this.setState((prevState: { messages: any; }) => ({
            ...prevState,
            messages: [...prevState.messages, message]
          }));
    }
}

export default ActionProvider;