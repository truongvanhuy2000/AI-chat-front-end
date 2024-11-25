import ChatAPI from "./ChatAPI";
import Chat from "../model/Chat";
import {Message, Role} from "../model/Message";
import ChatModel from "../model/ChatModel";
import axios from "axios";

const dummyData = [
    {
        id: 1,
        name: "Chat with Alice",
        date: new Date("2024-11-01T10:20:30Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "Hello! How are you?",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "I'm doing great! How can I assist you today?",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "Can you help me with JavaScript?",
            },
            {
                id: 4,
                role: Role.BOT,
                message: "Sure! What do you need help with specifically?",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: 2,
        name: "Project Discussion",
        date: new Date("2024-11-02T14:15:00Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "Let's discuss the new project requirements.",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "Sure, what aspects of the project would you like to go over?",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "Can you list the primary goals?",
            },
            {
                id: 4,
                role: Role.BOT,
                message: "1. Improve user interface\n2. Optimize database queries\n3. Implement API integrations",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: 3,
        name: "Casual Chat",
        date: new Date("2024-11-03T09:45:12Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "What's the weather like today?",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "It's sunny with a high of 25°C. Perfect for outdoor activities!",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "Thanks! Any recommendations for a picnic spot?",
            },
            {
                id: 4,
                role: Role.BOT,
                message: "How about Central Park? It's spacious and perfect for a picnic.",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: 4,
        name: "Tech Support",
        date: new Date("2024-11-04T16:30:00Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "I'm having trouble with my laptop.",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "What seems to be the problem?",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "It's running really slow. Any suggestions?",
            },
            {
                id: 4,
                role: Role.BOT,
                message: "You could try clearing temporary files, running a disk cleanup, and checking for malware.",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: 5,
        name: "Learning Session",
        date: new Date("2024-11-05T12:00:00Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "Can you teach me about async programming?",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "Absolutely! Async programming is a way to write non-blocking code using callbacks, promises, or async/await.",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "What are promises?",
            },
            {
                id: 4,
                role: Role.BOT,
                message: "Promises are objects representing the eventual completion or failure of an async operation. They simplify handling async logic.",
                modelName: "ChatGPT-4"
            },
            {
                id: 5,
                role: Role.HUMAN,
                message: "Thanks! That makes sense.",
            }
        ]
    },
    {
        id: 6,
        name: "Code Debugging",
        date: new Date("2024-11-06T19:45:00Z"),
        messages: [
            {
                id: 1,
                role: Role.HUMAN,
                message: "I'm getting an error in my code: 'undefined is not a function'.",
            },
            {
                id: 2,
                role: Role.BOT,
                message: "This usually happens when you're calling a function that hasn't been defined or is incorrectly referenced. Can I see the code?",
                modelName: "ChatGPT-4"
            },
            {
                id: 3,
                role: Role.HUMAN,
                message: "Sure, let me share it with you.",
            }
        ]
    }
];

const chatModels: ChatModel[] = [
    {id: 1, name: "ChatGPT-4"},
    {id: 2, name: "ChatGPT-3.5"},
    {id: 3, name: "Bard AI"},
    {id: 4, name: "Claude 2"},
    {id: 5, name: "Llama 2"},
    {id: 6, name: "Sage AI"},
    {id: 7, name: "Davinci"},
    {id: 8, name: "Curie"},
    {id: 9, name: "Ada"},
    {id: 10, name: "Babbage"}
];

const quotes = [
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do.",
];

// Function to get a random quote
function getRandomQuote() {
    if (!Array.isArray(quotes) || quotes.length === 0) {
        throw new Error("Invalid quotes array");
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const MockChatAPI: ChatAPI = {
    async deleteAllChat(): Promise<void> {
        return Promise.resolve(undefined);
    }, async deleteChat(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }, async editChat(chat: Chat, id: number): Promise<Chat> {
        return Promise.resolve(chat);
    }, async getAllMessagesFromChat(id: number): Promise<Message[]> {
        const chat: Chat = dummyData.find(it => it.id === id)
        console.log("getAllMessagesFromChat", chat)
        return Promise.resolve(chat.messages);
    }, async getChatByID(id: number): Promise<Chat> {
        const chat: Chat = dummyData.find(it => it.id === id)
        return Promise.resolve(chat);
    }, async getChatList(): Promise<Chat[]> {
        const chatList: Chat[] = dummyData.map(it => {
            return it
        })
        return Promise.resolve(chatList);
    }, async getModelList(): Promise<ChatModel[]> {
        return Promise.resolve(chatModels);
    }, async sendChatMessage(chatID: number, message: Message): Promise<Message> {
        const responseMessage: Message = {
            id: message.id + 1,
            message: getRandomQuote(),
            role: Role.BOT,
        }
        return Promise.resolve(responseMessage);
    }
}

export default MockChatAPI