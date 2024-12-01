import {Message} from "./Message";

/**
 * Represent a chat session
 */
interface Chat {
    id?: string;
    name: string;
    createdAt?: number;
    messages?: Message[];
    isNew?: boolean;
}

export default Chat