import ChatItem from "./ChatItem";
import Box from "@mui/material/Box";
import {useContext, useEffect} from "react";
import ChatAPI from "../../../services/ChatAPI";
import Chat from "../../../model/Chat";
import {useSnackbar} from "notistack";
import {
    ChatAPIContext,
    ChatListContext,
    ChatListContextProps,
    CurrentSelectedChatContext,
    CurrentSelectedChatContextProps
} from "../ChatBot";

function ChatHistory() {
    const chatAPI: ChatAPI = useContext(ChatAPIContext)
    const {chats, setChats}: ChatListContextProps = useContext(ChatListContext);
    const {enqueueSnackbar} = useSnackbar();
    const {selectedChat, setSelectedChat}: CurrentSelectedChatContextProps = useContext(CurrentSelectedChatContext);

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
            '& > *': {flexShrink: 0},
        }}>
            {chats.sort((chatA, chatB) => chatA.date.getTime() >= chatB.date.getTime() ? 0 : 1)
                .map((item: Chat, index: number) => (
                <ChatItem
                    key={index}
                    item={item}
                    isSelected={selectedChat?.id === item?.id} // Compare index to determine selected
                    onClick={() => handleClick(item)}
                />
            ))}
        </Box>
    )
}

export default ChatHistory;