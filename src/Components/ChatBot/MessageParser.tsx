

class MessageParser {
    actionProvider : any;
    constructor(actionProvider : any) {
        this.actionProvider = actionProvider;
    }

    parse(message : any) {
        const userMessage = message;
        console.log(`Text sent to : ${message}`);
        this.actionProvider.greetFunc(userMessage);
        
    }
}

export default MessageParser;
