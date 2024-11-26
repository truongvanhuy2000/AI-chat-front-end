/**
 * Format for each message
 * role is for deciding the message belong to human or bot
 * id is for ordering
 * modelName is used when client send chat request, causes they can change the model on the fly right ???
 */
export interface Message {
    id?: number;
    role: Role;
    message: string;
    modelName?: string;
}

export enum Role {
    HUMAN,
    BOT
}