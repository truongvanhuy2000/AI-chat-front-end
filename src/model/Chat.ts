import {Message} from "./Message";

/**
 * Represent a chat session
 */
interface Chat {
    id: string;
    name: string;
    date: Date;
    messages?: Message[];
}

export default Chat