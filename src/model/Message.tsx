export interface Message {
    index: number;
    role: Role;
    message: string;
}

export enum Role {
    HUMAN,
    BOT
}