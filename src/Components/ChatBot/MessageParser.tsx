import ActionProvider from "./ActionProvider";
import config from "./config";

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
            this.actionProvider.greetFunc();
                console.log(message);
        }
        
    }
}

export default MessageParser;