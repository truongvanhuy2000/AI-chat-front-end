import GenericSidePanel from "../../../components/layout/SidePanel/GenericSidePanel";
import Typography from "@mui/material/Typography";
import {Divider, Stack, TextField, useMediaQuery, useTheme} from "@mui/material";
import ChatHistory from "./ChatHistory";
import ColorfulGradientButton from "../../../components/button/ColorfulGradientButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BoxMenuItem from "../../../components/BoxMenuItem";
import HoverableIcon from "../../../components/HoverableIcon";
import {useContext, useEffect, useState} from "react";
import {
    ChatAPIContext,
    ChatListContext,
    ChatListContextProps,
    CurrentSelectedChatContext,
    CurrentSelectedChatContextProps,
    SidePanelCollapsibleContext
} from "../ChatBot";
import ChatAPI from "../../../services/ChatAPI";

import {ReactComponent as NewChatSVG} from '../../../assets/edit-edit-3.svg';
import MenuIcon from "../../../components/MenuIcon";
import DeleteConfirmationDialog from "../../../components/dialog/DeleteConfirmationDialog";

function ChatSidePanel() {
    const chatAPI: ChatAPI = useContext(ChatAPIContext)
    const {setChats}: ChatListContextProps = useContext(ChatListContext);
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);
    const {setSelectedChat}: CurrentSelectedChatContextProps = useContext(CurrentSelectedChatContext);
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Small screens
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("md")); // Medium screens
    const theme = useTheme();
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if ((isSm || isMd) && isOpen) {
            togglePanel()
        }
    }, [isSm, isMd])

    async function onClickNewChat() {
        setSelectedChat(null)
    }

    async function onDeleteAllConversation() {
        try {
            await chatAPI.deleteAllChat()
            const chatList = await chatAPI.getChatList()
            setChats(chatList)
            setSelectedChat(null)
        } catch (e) {

        }
    }

    return (
        <GenericSidePanel sx={{
            width: isOpen ? {xl: '300px', md: '300px', sm: '300px', xs: '300px'} : 0, // Adjust width for open/close
            transition: "width 0.2s ease", // Smooth transition
            position: {xl: 'relative', md: 'relative', sm: 'absolute', xs: 'absolute'},
            padding: isOpen ? '10px 10px 10px 10px' : '0px',
            opacity: isOpen ? 100 : 0,
            zIndex: 4,
        }}>
            <Stack direction='row' spacing='10px'>
                <HoverableIcon onClick={togglePanel}>
                    <MenuIcon/>
                </HoverableIcon>
            </Stack>
            <Stack direction='row' spacing='10px'>
                <ColorfulGradientButton
                    onClick={onClickNewChat}
                    sx={{
                        justifyContent: "flex-start",
                        gap: "15px",
                        flexGrow: 1,
                    }}>
                    <NewChatSVG style={{width: '30px'}}/>
                    <Typography sx={{color: theme.palette.grey["900"]}}>New chat</Typography>
                </ColorfulGradientButton>
            </Stack>
            <TextField
                id="outlined-basic"
                label={
                    <Stack direction='row' alignContent='center' gap='10px'>
                        <SearchOutlinedIcon/><Typography>Search conversations</Typography>
                    </Stack>}
                variant="outlined"
                onChange={event => setSearch(event.target.value)}
            />
            <Divider/>
            <ChatHistory search={search}/>
            <Divider sx={{mt: 'auto'}}/>
            <Stack
                direction='column'
                sx={{
                    alignItems: 'center',
                    gap: '10px',
                    width: "100%"
                }}
            >
                <BoxMenuItem sx={{gap: '10px'}} onClick={() => setOpenDeleteConfirmation(true)}>
                    <DeleteOutlinedIcon color={"error"} fontSize={'small'}/>
                    <Typography>Clear conversations</Typography>
                </BoxMenuItem>
            </Stack>
            <DeleteConfirmationDialog
                title={"Confirm Deletion"}
                content={"This action cannot be undone. Are you sure you want to proceed?"}
                open={openDeleteConfirmation}
                onAgree={onDeleteAllConversation}
                onClose={() => setOpenDeleteConfirmation(false)}
            />
        </GenericSidePanel>
    )
}

export default ChatSidePanel;