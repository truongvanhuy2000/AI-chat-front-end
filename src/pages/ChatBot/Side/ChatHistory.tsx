import ChatItem from "./ChatItem";
import Box from "@mui/material/Box";
import {useContext, useEffect, useState} from "react";
import ChatAPI from "../../../services/ChatAPI";
import MockChatAPI from "../../../services/MockChatAPI";
import Chat from "../../../model/Chat";
import {useSnackbar} from "notistack";
import {CurrentSelectedChatContext} from "../ChatBot";

const chatAPI: ChatAPI = MockChatAPI

function ChatHistory() {
    const [chats, setChats] = useState<Chat[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    const [selectedChat, setSelectedChat] = useContext(CurrentSelectedChatContext);

    async function getChatList() {
        try {
            const chatList: Chat[] = await chatAPI.getChatList()
            console.log(chatList)
            setChats(chatList)
        } catch (e) {
            enqueueSnackbar(e.message, {variant: 'error'});
        } finally {
        }
    }
    useEffect(() => {
        getChatList().then()
    }, []);

    const handleClick = (item: Chat) => {
        setSelectedChat(item); // Set selected item by index
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '10px',
            height: '100vh',
            overflow: "auto",
            '& > *': { flexShrink: 0 },
        }}>
            {chats.map((item: Chat, index: number) => (
                <ChatItem
                    key={index}
                    itemName={item.name}
                    isSelected={selectedChat?.id === item.id} // Compare index to determine selected
                    onClick={() => handleClick(item)}
                />
            ))}
        </Box>
    )
}

export default ChatHistory;