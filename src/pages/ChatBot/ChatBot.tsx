import Box from "@mui/material/Box";
import ChatSidePanel from "./Side/ChatSidePanel";
import ChatArea from "./Main/ChatArea";
import {createContext, useState} from "react";
import {useTheme} from "@mui/material";
import Chat from "../../model/Chat";
import ChatAPI from "../../services/ChatAPI";
import MockChatAPI from "../../services/MockChatAPI";
import ServerChatAPI from "../../services/ServerChatAPI";

export const SidePanelCollapsibleContext = createContext(null);
export const CurrentSelectedChatContext = createContext<CurrentSelectedChatContextProps>(null);
export const ChatListContext = createContext<ChatListContextProps>(null);
export const ChatAPIContext = createContext<ChatAPI>(null);

export interface CurrentSelectedChatContextProps {
    selectedChat: Chat;
    setSelectedChat: (chat: Chat) => void;
}

export interface ChatListContextProps {
    chats: Chat[];
    setChats: (chats: Chat[]) => void;
}

function ChatBot() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(true);
    const [selectedChat, setSelectedChat] = useState<Chat>(null);
    const [chats, setChats] = useState<Chat[]>([]);
    const chatAPI: ChatAPI = new ServerChatAPI()

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ChatAPIContext.Provider value={chatAPI}>
            <SidePanelCollapsibleContext.Provider value={[isOpen, togglePanel]}>
                <CurrentSelectedChatContext.Provider value={{selectedChat, setSelectedChat}}>
                    <ChatListContext.Provider value={{chats, setChats}}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: "100%",
                            backgroundColor: theme.palette.grey["800"],
                        }}>
                            <ChatSidePanel></ChatSidePanel>
                            <ChatArea></ChatArea>
                        </Box>
                    </ChatListContext.Provider>
                </CurrentSelectedChatContext.Provider>
            </SidePanelCollapsibleContext.Provider>
        </ChatAPIContext.Provider>
    )
}

export default ChatBot;