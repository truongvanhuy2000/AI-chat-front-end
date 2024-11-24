import Box from "@mui/material/Box";
import {Avatar, Stack, TextField, useTheme} from "@mui/material";
import Logo from "../../../components/Logo";
import ChatBox from "../../../components/ChatBox";
import RoundButton from "../../../components/button/RoundButton";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {useContext, useState} from "react";
import Typography from "@mui/material/Typography";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {ReactTyped} from "react-typed";
import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import ChatBubble from "./ChatBubble";
import MenuItem from "@mui/material/MenuItem";
import StyledSelect from "../../../components/SelectionMenuItem";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import {deepOrange} from "@mui/material/colors";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import HoverableIcon from "../../../components/HoverableIcon";
import {SidePanelCollapsibleContext} from "../ChatBot";

export const testMessage: Message[] = [
    {
        index: 0,
        role: Role.HUMAN,
        message: "Hi, how are you?",
    },
    {
        index: 1,
        role: Role.BOT,
        message: "Hello! I'm doing well, thank you. How can I assist you today?",
    },
    {
        index: 2,
        role: Role.HUMAN,
        message: "Can you tell me a joke?",
    },
    {
        index: 3,
        role: Role.BOT,
        message: "Sure! Why don’t skeletons fight each other? Because they don’t have the guts!",
    },
    {
        index: 4,
        role: Role.HUMAN,
        message: "Haha, that's a good one. What's the weather like today?",
    },
    {
        index: 5,
        role: Role.BOT,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 6,
        role: Role.HUMAN,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 7,
        role: Role.BOT,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 8,
        role: Role.HUMAN,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 9,
        role: Role.BOT,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 10,
        role: Role.HUMAN,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 11,
        role: Role.BOT,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
    {
        index: 12,
        role: Role.HUMAN,
        message: "I don't have real-time weather data, but I can help you find it online if you want!",
    },
];

function ChatArea() {
    const theme = useTheme();
    const [messages, setMessages] = useState<Message[]>(testMessage);
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);

    return (
        <Stack direction='column' sx={{
            flex: 1,
            backgroundColor: theme.palette.grey["800"],
            padding: '20px 20px 20px 20px',
            justifyContent: messages ? null : 'center',
            gap: "20px",
        }}>
            <Stack direction={"row"} sx={{height: '30px'}}>
                {
                    !isOpen &&
                    <HoverableIcon onClick={togglePanel}>
                        <WidgetsRoundedIcon fontSize='medium' color={'primary'}/>
                    </HoverableIcon>
                }
                <StyledSelect
                    renderValue={(value) =>
                        <>
                            <Stack direction="row" alignItems="center" gap='10px'>
                                <SettingsSuggestRoundedIcon fontSize={'small'}/>
                                <Typography variant='h6' sx={{fontWeight: 800,}}>{`${value}`}</Typography>
                            </Stack>
                        </>
                    }
                    labelId="side-select-label"
                >
                    <MenuItem value="GPT Model 4o">GPT Model 4o</MenuItem>
                    <MenuItem value="MiniGPT 4o">MiniGPT 4o</MenuItem>
                    <MenuItem value="Legacy GPT4.0">Legacy GPT4.0</MenuItem>
                </StyledSelect>
                <Avatar sx={{ml: 'auto', bgcolor: deepOrange[500]}}>N</Avatar>
            </Stack>
            {messages &&
                <Stack sx={{
                    width: "100%",
                    height: '100vh',
                    overflow: "auto",
                }}>
                    <Stack direction='column' gap={'40px'} sx={{
                        width: {xl: '60%', md: '80%', sm: '90%'},
                        alignSelf: "center",
                        '& > *': {flexShrink: 0},
                    }}>
                        {
                            messages.map((value: Message, index: number) => {
                                return <ChatBubble message={value}/>
                            })
                        }
                    </Stack>
                </Stack>
            }
            <Stack sx={{
                bottom: 0,
                alignItems: 'center',
                gap: '20px',
                mt: messages ? 'auto' : null,
                width: "100%"
            }}>
                {!messages &&
                    <Typography variant='h4' sx={{color: theme.palette.common.white, fontWeight: 800,}}>
                        <ReactTyped strings={["What can I help with?"]} typeSpeed={50} showCursor={false}/>
                    </Typography>
                }
                <BoundingBox sx={{
                    width: {xl: '60%', md: '80%', sm: '90%'},
                }}>
                    <ChatBox maxRows={6} placeholder={'Message BLOOMChat'} multiline></ChatBox>
                    <RoundButton sx={{ml: 'auto', background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'}}>
                        <SendRoundedIcon fontSize={'small'} sx={{color: "#1e1e1e"}}/>
                    </RoundButton>
                </BoundingBox>
            </Stack>
        </Stack>
    )
}

export default ChatArea;