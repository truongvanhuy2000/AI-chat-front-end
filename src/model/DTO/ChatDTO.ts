export interface ChatDTO {
    id: string;
    model: string;
    userID: string;
}

export interface GetChatListApiResponse {
    conversations: ChatDTO[];
    message: string;
    success: boolean;
}