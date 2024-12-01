import {Role} from "../Message";

interface MessageDTO {
    success: boolean;
    message: string;
    content: string;
    role: Role;
    conversation_id: string;
    timestamp: number;
    conversation_name?: string;
}

export interface MessageRequest {
    content: string;           // The message content
    conversation_id?: string;   // The chat ID
    model?: string;             // The model name
    role: string;              // The role of the sender
}

export default MessageDTO;