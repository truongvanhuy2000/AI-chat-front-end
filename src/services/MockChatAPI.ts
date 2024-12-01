import ChatAPI from "./ChatAPI";
import Chat from "../model/Chat";
import {Message, Role} from "../model/Message";
import ChatModel from "../model/ChatModel";
import ChatModels from "./ChatModels";
// @ts-nocheck
import {v4 as uuidv4} from 'uuid';

let dummyData: Chat[] = [
    {
        id: "1",
        name: "Chat with Alice",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "Hello! How are you?",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "I'm doing great! How can I assist you today?",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "Can you help me with JavaScript?",
            },
            {
                id: "4",
                role: Role.BOT,
                message: "# The Rise of Artificial Intelligence\n" +
                    "\n" +
                    "In the ever-evolving landscape of technology, the rapid advancement of **artificial intelligence (AI)** has sparked both excitement and concern across various sectors, from **healthcare** to **finance**, **transportation**, and **entertainment**. As AI systems become more sophisticated, they offer the potential to revolutionize industries by:\n" +
                    "\n" +
                    "- Automating complex tasks\n" +
                    "- Enhancing decision-making processes\n" +
                    "- Creating new opportunities for innovation\n",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: "2",
        name: "Project Discussion about the world",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "Let's discuss the new project requirements.",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "Sure, what aspects of the project would you like to go over?",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "Can you list the primary goals?",
            },
            {
                id: "4",
                role: Role.BOT,
                message: "Primary goals:\n1. Improve user interface\n2. Optimize database queries\n3. Implement API integrations",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: "3",
        name: "Casual Chat",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "What's the weather like today?",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "It's sunny with a high of 25°C. Perfect for outdoor activities!",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "Thanks! Any recommendations for a picnic spot?",
            },
            {
                id: "4",
                role: Role.BOT,
                message: "How about Central Park? It's spacious and perfect for a picnic.",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: "4",
        name: "Tech Support",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "I'm having trouble with my laptop.",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "What seems to be the problem?",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "It's running really slow. Any suggestions?",
            },
            {
                id: "4",
                role: Role.BOT,
                message: "You could try clearing temporary files, running a disk cleanup, and checking for malware.",
                modelName: "ChatGPT-4"
            }
        ]
    },
    {
        id: "5",
        name: "Learning Session",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "Can you teach me about async programming?",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "Absolutely! Async programming is a way to write non-blocking code using callbacks, promises, or async/await.",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "What are promises?",
            },
            {
                id: "4",
                role: Role.BOT,
                message: "Promises are objects representing the eventual completion or failure of an async operation. They simplify handling async logic.",
                modelName: "ChatGPT-4"
            },
            {
                id: "5",
                role: Role.HUMAN,
                message: "Thanks! That makes sense.",
            }
        ]
    },
    {
        id: "6",
        name: "Code Debugging",
        messages: [
            {
                id: "1",
                role: Role.HUMAN,
                message: "I'm getting an error in my code: 'undefined is not a function'.",
            },
            {
                id: "2",
                role: Role.BOT,
                message: "This usually happens when you're calling a function that hasn't been defined or is incorrectly referenced. Can I see the code?",
                modelName: "ChatGPT-4"
            },
            {
                id: "3",
                role: Role.HUMAN,
                message: "Sure, let me share it with you.",
            }
        ]
    }
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const MockChatAPI: ChatAPI = {
    async createNewChat(message: Message): Promise<Chat> {
        await sleep(5 * 1000)
        const responseMessage: Message = {
            id: uuidv4(),
            message: getRandomQuote(),
            role: Role.BOT,
        }
        const newChat: Chat = {
            id: uuidv4(),
            name: "New Conversation",
            messages: [message, responseMessage]
        }
        dummyData.push(newChat);
        return Promise.resolve(newChat);
    },
    async deleteAllChat(): Promise<void> {
        dummyData.length = 0
        return Promise.resolve(undefined);
    }, async deleteChat(id: string): Promise<void> {
        dummyData = dummyData.filter(it => it.id !== id)
        return Promise.resolve(undefined);
    }, async editChat(chat: Chat, id: string): Promise<Chat> {
        const foundChat: Chat = dummyData.find(it => it.id === id);
        foundChat.name = chat.name;
        return Promise.resolve(chat);
    }, async getAllMessagesFromChat(id: string): Promise<Message[]> {
        const chat: Chat = dummyData.find(it => it.id === id)
        return Promise.resolve(chat.messages);
    }, async getChatByID(id: string): Promise<Chat> {
        const chat: Chat = dummyData.find(it => it.id === id)
        return Promise.resolve(chat);
    }, async getChatList(): Promise<Chat[]> {
        const chatList: Chat[] = dummyData.map(it => {
            return it
        })
        return Promise.resolve(chatList);
    }, async getModelList(): Promise<ChatModel[]> {
        return Promise.resolve(ChatModels);
    }, async sendChatMessage(chatID: string, message: Message): Promise<Message> {
        await sleep(5 * 1000)
        const responseMessage: Message = {
            id: uuidv4(),
            message: getRandomQuote(),
            role: Role.BOT,
        }
        const chat: Chat = dummyData.find(it => it.id === chatID)
        if (!chat.messages) {
            chat.messages = []
        }
        chat.messages = [...chat.messages, message, responseMessage]
        return Promise.resolve(responseMessage);
    }
}

export default MockChatAPI