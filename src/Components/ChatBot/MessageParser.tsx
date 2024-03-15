
import axios from "axios";

class MessageParser {
    actionProvider : any;
    constructor(actionProvider : any) {
        this.actionProvider = actionProvider;
    }

    parse(message : any) {
        const userMessage = message;
        
        this.actionProvider.greetFunc(userMessage);
        
    }
}

export default MessageParser;
