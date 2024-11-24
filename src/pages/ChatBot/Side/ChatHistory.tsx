import ChatItem from "./ChatItem";
import Box from "@mui/material/Box";
import {useState} from "react";

function ChatHistory() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const chatItems = [
        'New conversation',
        'New conversation',
        'New conversation',
        'New conversation',
        'New conversation',
        'New conversation',
        'New conversation',
        'New conversation',
    ];

    const handleClick = (index) => {
        setSelectedIndex(index); // Set selected item by index
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
            {chatItems.map((item, index) => (
                <ChatItem
                    key={index}
                    itemName={item}
                    isSelected={selectedIndex === index} // Compare index to determine selected
                    onClick={() => handleClick(index)}
                />
            ))}
        </Box>
    )
}

export default ChatHistory;