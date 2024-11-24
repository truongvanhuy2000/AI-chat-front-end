import Box from "@mui/material/Box";
import ChatSidePanel from "./Side/ChatSidePanel";
import ChatArea from "./Main/ChatArea";
import {createContext, useState} from "react";

export const SidePanelCollapsibleContext = createContext(null);

function ChatBot() {
    const [isOpen, setIsOpen] = useState(true);
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidePanelCollapsibleContext.Provider value={[isOpen, togglePanel]}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: "100%"
            }}>
                <ChatSidePanel></ChatSidePanel>
                <ChatArea></ChatArea>
            </Box>
        </SidePanelCollapsibleContext.Provider>
    )
}

export default ChatBot;