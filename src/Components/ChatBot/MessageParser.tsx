import axios from "axios";

const sendData = async (question:any) => {
    try {
    //   const dataToSend = { key: 'value' }; // Your data object
      const response = await axios.post('http://your-flask-api-endpoint.com/data', question);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }


class MessageParser {
    actionProvider: any;
    state: any;
    constructor(actionProvider: any, state: any) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    

    parse(message: any) {
        // console.log(message);
        const userMessage = message.toLowerCase();
        // this.actionProvider.greetFunc();
        if(userMessage.includes("hi") || userMessage.includes("hello")) {
            sendData(userMessage);
            this.actionProvider.greetFunc();
                console.log(message);
        }
        
    }
}

export default MessageParser;