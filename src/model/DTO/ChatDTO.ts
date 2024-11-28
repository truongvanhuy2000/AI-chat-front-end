export interface ChatDTO {
    ID: string;
    model: string;
    userID: string;
    conversationName: string
}

export interface GetChatListApiResponse {
    conversations: ChatDTO[];
    message: string;
    success: boolean;
}

export interface GetChatApiResponse {
    conversations: ChatDTO;
    message: string;
    success: boolean;
}