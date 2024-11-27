import {Role} from "../Message";

interface MessageDTO {
    success: boolean;
    message: string;
    content: string;
    role: Role;
    conversation_id: string;
    created_at: number;
}

export default MessageDTO;