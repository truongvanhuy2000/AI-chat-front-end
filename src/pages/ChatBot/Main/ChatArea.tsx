import {Stack, useTheme} from "@mui/material";
import ChatBox from "../../../components/ChatBox";
import RoundButton from "../../../components/button/RoundButton";
import {useContext, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {ReactTyped} from "react-typed";
import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import ChatBubble from "./ChatBubble";
import MenuItem from "@mui/material/MenuItem";
import StyledSelect from "../../../components/SelectionMenuItem";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import HoverableIcon from "../../../components/HoverableIcon";
import {CurrentSelectedChatContext, SidePanelCollapsibleContext} from "../ChatBot";
import ChatAPI from "../../../services/ChatAPI";
import MockChatAPI from "../../../services/MockChatAPI";
import Chat from "../../../model/Chat";
import ChatModel from "../../../model/ChatModel";

const chatAPI: ChatAPI = MockChatAPI

function ChatArea() {
    const theme = useTheme();
    const [messages, setMessages] = useState<Message[]>(null);
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);
    const [selectedChat] = useContext(CurrentSelectedChatContext);
    const [modelList, setModelList] = useState<ChatModel[]>([]);

    async function getModelList() {
        try {
            const modelList: ChatModel[] = await chatAPI.getModelList();
            setModelList(modelList);
        } catch (e) {

        }
    }

    async function getMessages(id: number) {
        try {
            const messages: Message[] = await chatAPI.getAllMessagesFromChat(id)
            setMessages(messages)
        } catch (e) {

        } finally {

        }
    }

    useEffect(() => {
        getModelList().then()
    }, []);

    useEffect(() => {
        if (selectedChat) {
            getMessages(selectedChat.id).then()
        } else {
            setMessages(null)
        }
    }, [selectedChat]);

    return (
        <Stack direction='column' sx={{
            flex: 1,
            backgroundColor: theme.palette.grey["800"],
            padding: '20px 20px 20px 20px',
            zIndex: 2,
            height: '100vh',
            boxSizing: 'border-box',
            gap: '20px'
        }}>
            <Stack direction={"row"} sx={{height: '30px'}}>
                {
                    !isOpen &&
                    <HoverableIcon onClick={togglePanel}>
                        <WidgetsRoundedIcon fontSize='medium' color={'primary'}/>
                    </HoverableIcon>
                }
                <StyledSelect
                    defaultValue={1}
                    renderValue={(value) =>
                        <>
                            <Stack direction="row" alignItems="center" gap='10px'>
                                <SettingsSuggestRoundedIcon fontSize={'small'}/>
                                <Typography variant='h6' sx={{fontWeight: 'bold',}}>
                                    {`${modelList.find(it => it.id === value)?.name}`}
                                </Typography>
                            </Stack>
                        </>
                    }
                    labelId="side-select-label"
                >
                    {
                        modelList.map(it => <MenuItem value={it.id}>{it.name}</MenuItem>)
                    }

                </StyledSelect>
            </Stack>
            <Stack direction='column' sx={{
                justifyContent: messages ? null : 'center',
                gap: "20px",
                height: '100%',
                overflow: "auto",
            }}>
                {messages &&
                    <Stack sx={{
                        width: "100%",
                        overflow: "auto",
                    }}>
                        <Stack direction='column' gap={'40px'} sx={{
                            width: {xl: '60%', md: '80%', sm: '90%', xs: '90%'},
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
                        width: {xl: '60%', md: '80%', sm: '90%', xs: '90%'},
                    }}>
                        <ChatBox maxRows={6} placeholder={'Message BLOOMChat'} multiline></ChatBox>
                        <RoundButton sx={{
                            ml: 'auto',
                            background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'
                        }}>
                            <SendRoundedIcon fontSize={'small'} sx={{color: "#1e1e1e"}}/>
                        </RoundButton>
                    </BoundingBox>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ChatArea;