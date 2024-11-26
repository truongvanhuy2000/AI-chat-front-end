import Chat from "../model/Chat";
import {Message} from "../model/Message";
import ChatModel from "../model/ChatModel";

interface ChatAPI {
    createNewChat(): Promise<Chat>;
    /**
     * Get info of a chat, don't put messages here
     * @param id
     */
    getChatByID(id: number): Promise<Chat>;
    /**
     * Get the list of all chat, don't put messages here
     */
    getChatList(): Promise<Chat[]>;
    /**
     * Delete chat by id
     * @param id
     */
    deleteChat(id: string): Promise<void>;
    /**
     * Delete all chat
     * @param id
     */
    deleteAllChat(): Promise<void>;
    /**
     * Edit chat name, maybe more etc...
     * @param chat contain data to be edit
     * @param id chat id
     */
    editChat(chat: Chat, id: number): Promise<Chat>;

    /**
     * Get message history of a single chat, possible pagination ????
     * @param id chat id
     */
    getAllMessagesFromChat(id: number): Promise<Message[]>;

    /**
     * Get all possible chat model
     */
    getModelList(): Promise<ChatModel[]>;

    /**
     * Send the message and get back the response from bot
     * @param chatID
     * @param message
     */
    sendChatMessage(chatID: number, message: Message): Promise<Message>;
}

export default ChatAPI;