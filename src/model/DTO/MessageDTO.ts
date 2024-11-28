import {Role} from "../Message";
import exp from "node:constants";

interface MessageDTO {
    success: boolean;
    message: string;
    content: string;
    role: Role;
    conversation_id: string;
    created_at: number;
}

export interface MessageRequest {
    content: string;           // The message content
    conversation_id?: string;   // The chat ID
    model?: string;             // The model name
    role: string;              // The role of the sender
}

export default MessageDTO;