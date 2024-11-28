import ChatAPI from "./ChatAPI";
import {Message, Role} from "../model/Message";
import Chat from "../model/Chat";
import ChatModel from "../model/ChatModel";
import axios from "axios";
import MessageDTO, {MessageRequest} from "../model/DTO/MessageDTO";
import ChatModels from "./ChatModels";
import {GetChatApiResponse, GetChatListApiResponse} from "../model/DTO/ChatDTO";

class ServerChatAPI implements ChatAPI {
    userID: string

    async createNewChat(message: Message): Promise<Chat> {
        let data: MessageRequest = {
            content: message.message,
            model: message.modelName,
            role: message.role
        }
        try {
            let response = await axios.post<MessageDTO>("/send-chat", data);
            return {
                date: new Date(),
                id: response.data.conversation_id,
                messages: [message, {
                    role: Role.BOT,
                    message: response.data.content,
                }],
                name: "New Conversation",
            }
        } catch (e) {
            console.error(e);
            return null
        }
    }

    async deleteAllChat(): Promise<void> {
        try {
            let response = await axios.delete("/delete-all-chat");
        } catch (e) {
            console.error(e);
        }
        return null
    }

    async deleteChat(id: string): Promise<void> {
        try {
            await axios.delete(`/delete-chat/${id}`)
        } catch (e) {
            console.error(e);
        }
        return null
    }

    editChat(chat: Chat, id: string): Promise<Chat> {
        return Promise.resolve(undefined);
    }

    async getAllMessagesFromChat(id: string): Promise<Message[]> {
        try {

            let response = await axios.get<string>(`/get-all-msgs-by-id/${id}`)
            const jsonString = atob(response.data)
            const messageList: MessageDTO[] = JSON.parse(jsonString)
            return messageList.map(((it, index) => {
                return {
                    role: it.role,
                    message: it.content,
                }
            }))
        } catch (e) {
            console.error(e);
            return []
        }
    }

    async getChatByID(id: string): Promise<Chat> {
        try {
            let response = await axios.get<string>(`/get-chat-by-id/${id}`)
            const jsonString = atob(response.data)
            const chatResponse: GetChatApiResponse = JSON.parse(jsonString)
            return {
                date: new Date(),
                id: chatResponse.conversations.ID,
                messages: [],
                name: chatResponse.conversations.conversationName
            }
        } catch (e) {
            console.error(e);
        }
    }

    async getChatList(): Promise<Chat[]> {
        try {
            let response = await axios.get<string>("/get-chat-list");
            const jsonString = atob(response.data);
            const chatListResponse: GetChatListApiResponse = JSON.parse(jsonString);
            return chatListResponse.conversations.map(((it, index) => {
                return {
                    id: it.ID,
                    name: it.conversationName,
                    date: new Date(Date.now() + index)
                }
            }))
        } catch (e) {
            console.error(e);
            return []
        }
    }

    getModelList(): Promise<ChatModel[]> {
        return Promise.resolve(ChatModels);
    }

    async sendChatMessage(chatID: string, message: Message): Promise<Message> {
        let data: MessageRequest = {
            content: message.message,
            conversation_id: chatID,
            model: message.modelName,
            role: message.role
        }
        try {
            let response = await axios.post<MessageDTO>("/send-chat", data);
            console.log("sendChatMessage", response);
            return {
                message: response.data.content,
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