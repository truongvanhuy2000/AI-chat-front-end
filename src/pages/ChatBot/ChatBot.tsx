import Box from "@mui/material/Box";
import ChatSidePanel from "./Side/ChatSidePanel";
import ChatArea from "./Main/ChatArea";
import {createContext, useState} from "react";
import {useTheme} from "@mui/material";
import Chat from "../../model/Chat";

export const SidePanelCollapsibleContext = createContext(null);
export const CurrentSelectedChatContext = createContext(null);

function ChatBot() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(true);
    const [selectedChat, setSelectedChat] = useState<Chat>(null);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidePanelCollapsibleContext.Provider value={[isOpen, togglePanel]}>
            <CurrentSelectedChatContext.Provider value={[selectedChat, setSelectedChat]}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: "100%",
                    backgroundColor: theme.palette.grey["800"],
                }}>
                    <ChatSidePanel></ChatSidePanel>
                    <ChatArea></ChatArea>
                </Box>
            </CurrentSelectedChatContext.Provider>
        </SidePanelCollapsibleContext.Provider>
    )
}

export default ChatBot;