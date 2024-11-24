import GenericSidePanel from "../../../components/layout/SidePanel/GenericSidePanel";
import WhiteStyledButton from "../../../components/button/WhiteStyledButton";
import Typography from "@mui/material/Typography";
import {Divider, Stack, TextField} from "@mui/material";
import ChatHistory from "./ChatHistory";
import ColorfulGradientButton from "../../../components/button/ColorfulGradientButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BoxMenuItem from "../../../components/BoxMenuItem";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import HoverableIcon from "../../../components/HoverableIcon";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {useContext} from "react";
import {SidePanelCollapsibleContext} from "../ChatBot";

function ChatSidePanel() {
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);

    return (
        <GenericSidePanel sx={{
            width: isOpen ? 300 : 0, // Adjust width for open/close
            transition: "width 0.5s ease", // Smooth transition
            // visibility: isOpen ? "visible" : "hidden",
            display: isOpen ? "flex" : "none",
            padding: isOpen ? '10px 10px 10px 10px' : '0px'
        }}>
            <Stack direction='row' spacing='10px'>
                <HoverableIcon onClick={togglePanel}>
                    <WidgetsRoundedIcon fontSize='medium' color={'primary'}/>
                </HoverableIcon>
            </Stack>
            <Stack direction='row' spacing='10px'>
                <ColorfulGradientButton sx={{
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