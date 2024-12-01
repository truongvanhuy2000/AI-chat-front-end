import ChatItem from "./ChatItem";
import Box from "@mui/material/Box";
import {useContext, useEffect, useState} from "react";
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
import LoadingContainer from "../../../components/LoadingContainer";

function ChatHistory({search}) {
    const chatAPI: ChatAPI = useContext(ChatAPIContext)
    const {chats, setChats}: ChatListContextProps = useContext(ChatListContext);
    const {enqueueSnackbar} = useSnackbar();
    const {selectedChat, setSelectedChat}: CurrentSelectedChatContextProps = useContext(CurrentSelectedChatContext);
    const [loading, setLoading] = useState(false)

    async function getChatList() {
        setLoading(true)
        try {
            const chatList: Chat[] = await chatAPI.getChatList()
            setChats(chatList)
        } catch (e) {
            enqueueSnackbar(e.message, {variant: 'error'});
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getChatList().then()
    }, []);

    const handleClick = (item: Chat) => {
        setSelectedChat(item); // Set selected item by index
    };

    return (
        <LoadingContainer loading={loading}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '10px',
                overflow: "auto",
                '& > *': {flexShrink: 0},
            }}>
                {chats.filter(value => value.name.toLowerCase().includes(search))
                    .sort((a, b) => Number(a.createdAt) > Number(b.createdAt) ? 0 : 1)
                    .map((item: Chat, index: number) => (
                        <ChatItem
                            key={index}
                            item={item}
                            isSelected={selectedChat?.id === item?.id} // Compare index to determine selected
                            onClick={() => handleClick(item)}
                        />
                    ))}
            </Box>
        </LoadingContainer>

    )
}

export default ChatHistory;