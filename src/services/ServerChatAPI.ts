import ChatAPI from "./ChatAPI";
import {Message, Role} from "../model/Message";
import Chat from "../model/Chat";
import ChatModel from "../model/ChatModel";
import axios from "axios";
import MessageDTO from "../model/DTO/MessageDTO";
import ChatModels from "./ChatModels";
import {GetChatListApiResponse} from "../model/DTO/ChatDTO";

const ServerChatAPI: ChatAPI = {
    createNewChat(): Promise<Chat> {
        return Promise.resolve(undefined);
    }, async deleteAllChat(): Promise<void> {
        try {
            let response = await axios.delete("/chat/all");
            console.debug("response message", response);
        } catch (e) {
            console.error(e);
        }
        return null
    }, async deleteChat(id: string): Promise<void> {
        try {
            await axios.delete(`/chat/${id}`);
        } catch (e) {
            console.error(e);
        }
        return null
    }, editChat(chat: Chat, id: string): Promise<Chat> {
        return Promise.resolve(undefined);
    }, async getAllMessagesFromChat(id: string): Promise<Message[]> {
        try {
            let response = await axios.get<MessageDTO[]>("/messages");
            console.debug("response message", response);
            return response.data.map(((it, index) => {
                return {
                    role: it.role,
                    message: it.message,
                }
            }))
        } catch (e) {
            console.error(e);
            return []
        }
    }, getChatByID(id: string): Promise<Chat> {

        return Promise.resolve(undefined);
    }, async getChatList(): Promise<Chat[]> {
        try {
            let response = await axios.get<GetChatListApiResponse>("/chat/all");
            console.debug("response message", response);
            return response.data.conversations.map(((it, index) => {
                return {
                    id: it.id,
                    name: it.userID,
                    date: new Date(Date.now() + index)
                }
            }))
        } catch (e) {
            console.error(e);
            return []
        }
    }, getModelList(): Promise<ChatModel[]> {
        return Promise.resolve(ChatModels);
    }, async sendChatMessage(chatID: string, message: Message): Promise<Message> {
        let data = {
            "content": message.message,
            "conversation_id": chatID,
            "model": message.modelName,
            "role": message.role
        }
        try {
            let response = await axios.post<MessageDTO>("/send-chat", data);
            console.debug("response message", response);
            return {
                message: response.data.message,
                role: Role.BOT,
                conversationID: response.data.conversation_id
            }
        } catch (e) {
            console.error(e);
            return null
        }
    }
}

export default ServerChatAPI;