
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
        const botMessage = this.createChatBotMessage("What can I do for you?");
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