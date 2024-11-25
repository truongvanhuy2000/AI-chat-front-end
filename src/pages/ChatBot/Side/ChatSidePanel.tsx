import GenericSidePanel from "../../../components/layout/SidePanel/GenericSidePanel";
import Typography from "@mui/material/Typography";
import {Divider, Stack, TextField, useMediaQuery} from "@mui/material";
import ChatHistory from "./ChatHistory";
import ColorfulGradientButton from "../../../components/button/ColorfulGradientButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BoxMenuItem from "../../../components/BoxMenuItem";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import HoverableIcon from "../../../components/HoverableIcon";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {useContext, useEffect} from "react";
import {CurrentSelectedChatContext, SidePanelCollapsibleContext} from "../ChatBot";

function ChatSidePanel() {
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);
    const [selectedChat, setSelectedChat] = useContext(CurrentSelectedChatContext);
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Small screens
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("md")); // Medium screens

    useEffect(() => {
        if ((isSm || isMd) && isOpen) {
            togglePanel()
        }
    }, [isSm, isMd])

    function onClickNewChat() {
        setSelectedChat(null)
    }

    return (
        <GenericSidePanel sx={{
            width: isOpen ? {xl: '300px', md: '250px', sm: '250px', xs: '250px'} : 0, // Adjust width for open/close
            transition: "width 0.2s ease", // Smooth transition
            position: {xl: 'relative', md: 'absolute', sm: 'absolute', xs: 'absolute'},
            padding: isOpen ? '10px 10px 10px 10px' : '0px',
            opacity: isOpen ? 100 : 0,
            zIndex: 4,
        }}>
            <Stack direction='row' spacing='10px'>
                <HoverableIcon onClick={togglePanel}>
                    <WidgetsRoundedIcon fontSize='medium' color={'primary'}/>
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
                    <AddCircleOutlineRoundedIcon/>
                    <Typography>New chat</Typography>
                </ColorfulGradientButton>
            </Stack>
            <TextField
                id="outlined-basic"
                label={
                    <Stack direction='row' alignContent='center' gap='10px'>
                        <SearchOutlinedIcon/><Typography>Search conversations</Typography>
                    </Stack>}
                variant="outlined"
            />
            <Divider/>
            <ChatHistory/>
            <Divider/>
            <Stack
                direction='column'
                sx={{
                    alignItems: 'center',
                    gap: '10px',
                    mt: 'auto',
                    width: "100%"
                }}
            >
                <BoxMenuItem sx={{gap: '10px'}}>
                    <DeleteOutlinedIcon color={"error"} fontSize={'small'}/>
                    <Typography>Clear conversations</Typography>
                </BoxMenuItem>

            </Stack>
        </GenericSidePanel>
    )
}

export default ChatSidePanel;