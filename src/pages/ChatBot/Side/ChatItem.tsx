import Box from "@mui/material/Box";
import {Stack, Tooltip} from "@mui/material";
import BoxMenuItem from "../../../components/BoxMenuItem";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from "@mui/material/Typography";
import {ReactComponent as MessageSVG} from '../../../assets/message-192.svg';
import HoverableIcon from "../../../components/HoverableIcon";
import ChatAPI from "../../../services/ChatAPI";
import {useContext, useEffect, useRef, useState} from "react";
import {ChatAPIContext, ChatListContext, ChatListContextProps, CurrentSelectedChatContext} from "../ChatBot";
import Chat from "../../../model/Chat";
import DeleteConfirmationDialog from "../../../components/dialog/DeleteConfirmationDialog";
import EditChatNameDialog from "../../../components/dialog/EditChatNameDialog";

interface ChatItemProps {
    item?: Chat,
    isSelected: boolean,
    onClick: () => void,
}

function ChatItem({item, isSelected, onClick}: ChatItemProps) {
    const chatAPI: ChatAPI = useContext<ChatAPI>(ChatAPIContext)
    const {setChats}: ChatListContextProps = useContext(ChatListContext);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const textRef = useRef(null);
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
    const [openEditChat, setOpenEditChat] = useState(false);
    const {selectedChat, setSelectedChat} = useContext(CurrentSelectedChatContext)

    useEffect(() => {
        if (textRef.current) {
            const isTextOverflowing = textRef.current.scrollWidth > textRef.current.clientWidth;
            console.log("isTextOverflowing", isTextOverflowing)
            setIsOverflowing(isTextOverflowing);
        }
    }, [item?.name]); // Re-check if text changes


    function onMouseEnter() {
        setIsHovered(true)
    }

    function onMouseLeave() {
        setIsHovered(false)
    }

    async function onEditChat(value: string) {
        try {
            const chat: Chat = {
                name: value
            }
            await chatAPI.editChat(chat, item?.id)
            const chatList = await chatAPI.getChatList()
            setChats(chatList)
        } catch (e) {

        }
    }

    async function onDeleteChat() {
        try {
            if (selectedChat?.id === item?.id) {
                setSelectedChat(null)
            }
            await chatAPI.deleteChat(item?.id)
            const chatList = await chatAPI.getChatList()
            setChats(chatList)
        } catch (e) {

        }
    }

    return (
        <>
            <Tooltip open={isHovered && isOverflowing} title={<Typography>{item?.name}</Typography>}
                     placement="top-start">
                <BoxMenuItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} selected={isSelected}
                             onClick={onClick}
                             sx={{height: '40px'}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: 1,
                        width: '100%',  // Ensures the Box takes up full available width
                    }}>

                        <Stack direction='row' gap='10px' sx={{flexGrow: 1, overflow: 'hidden'}}>
                            <MessageSVG style={{width: '20px', flexShrink: 0}}/>
                            <Typography
                                ref={textRef}
                                sx={{
                                    whiteSpace: 'nowrap',      // Prevent text from wrapping
                                    overflow: 'hidden',       // Hide the overflowed content
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {item?.name}
                            </Typography>
                        </Stack>
                        {isSelected && (
                            <Stack direction='row'>
                                <HoverableIcon onClick={() => setOpenEditChat(true)} sx={{padding: '4px'}}>
                                    <EditOutlinedIcon fontSize={'small'}/>
                                </HoverableIcon>
                                <HoverableIcon onClick={() => setOpenDeleteConfirmation(true)} sx={{padding: '4px'}}>
                                    <DeleteOutlinedIcon fontSize={'small'}/>
                                </HoverableIcon>
                            </Stack>
                        )}
                    </Box>
                </BoxMenuItem>
            </Tooltip>
            <DeleteConfirmationDialog
                title={"Confirm Deletion"}
                content={"Deleting this chat will remove it permanently. This action cannot be undone. Are you sure you want to proceed?"}
                open={openDeleteConfirmation}
                onAgree={onDeleteChat}
                onClose={() => setOpenDeleteConfirmation(false)}
            />
            <EditChatNameDialog
                title={"Edit Chat Name"}
                content={"Update the name for this chat. Changes will be saved automatically."}
                open={openEditChat}
                onAgree={onEditChat}
                onClose={() => setOpenEditChat(false)}
            />
        </>
    )
}

export default ChatItem;