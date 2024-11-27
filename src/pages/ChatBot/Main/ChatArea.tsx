import {Stack, useTheme} from "@mui/material";
import ChatBox from "../../../components/ChatBox";
import RoundButton from "../../../components/button/RoundButton";
import {useContext, useEffect, useRef, useState} from "react";
import Typography from "@mui/material/Typography";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {ReactTyped} from "react-typed";
import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import ChatBubble from "./ChatBubble";
import MenuItem from "@mui/material/MenuItem";
import StyledSelect from "../../../components/SelectionMenuItem";
import HoverableIcon from "../../../components/HoverableIcon";
import {ChatAPIContext, CurrentSelectedChatContext, SidePanelCollapsibleContext} from "../ChatBot";
import ChatAPI from "../../../services/ChatAPI";
import ChatModel from "../../../model/ChatModel";
import MenuIcon from "../../../components/MenuIcon";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PauseIcon from '@mui/icons-material/Pause';
import LoadingBotChatBubble from "../../../components/LoadingBotChatBubble";

function ChatArea() {
    const chatAPI: ChatAPI = useContext(ChatAPIContext)
    const theme = useTheme();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, togglePanel] = useContext(SidePanelCollapsibleContext);
    const {selectedChat} = useContext(CurrentSelectedChatContext);
    const [modelList, setModelList] = useState<ChatModel[]>([]);
    const inputChatMessage = useRef<string>("")
    const bottomRef = useRef(null);
    const [loading, setLoading] = useState<boolean>(false);

    console.log("selectedChat", selectedChat)
    console.log("messages", messages)

    async function getModelList() {
        try {
            const modelList: ChatModel[] = await chatAPI.getModelList();
            setModelList(modelList);
        } catch (e) {

        }
    }

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    async function getMessages(id: string) {
        try {
            const messages: Message[] = await chatAPI.getAllMessagesFromChat(id)
            setMessages(messages)
        } catch (e) {

        }
    }

    async function sendMessage() {
        console.log("sendMessage", selectedChat.id, inputChatMessage.current);
        setLoading(true)
        const sentMessage: Message = {
            message: inputChatMessage.current,
            role: Role.HUMAN
        }
        const currentMessages = messages ? messages : []
        chatAPI.sendChatMessage(selectedChat.id, sentMessage).then(receivedMessage => {
            setMessages([...currentMessages, sentMessage, receivedMessage])
            setLoading(false)
        })
        setMessages([...currentMessages, sentMessage])
    }

    useEffect(() => {
        getModelList().then()
    }, []);

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

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
                        <MenuIcon/>
                    </HoverableIcon>
                }
                <StyledSelect
                    sx={{ml: 'auto'}}
                    defaultValue={1}
                    renderValue={(value) =>
                        <Typography variant='h6' sx={{fontWeight: 'bold',}}>
                            {`${modelList.find(it => it.id === value)?.name}`}
                        </Typography>
                    }
                    IconComponent={SettingsRoundedIcon}
                    labelId="side-select-label"
                >
                    {
                        modelList.map(((it, index) => <MenuItem key={index} value={it.id}>{it.name}</MenuItem>))
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
                                    return <ChatBubble message={value} index={index}/>
                                })
                            }
                            {loading && <LoadingBotChatBubble/>}
                            <div ref={bottomRef}/>
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
                            <ReactTyped strings={["What can I help with?"]} typeSpeed={30} showCursor={false}/>
                        </Typography>
                    }
                    <BoundingBox sx={{
                        width: {xl: '60%', md: '80%', sm: '90%', xs: '90%'},
                    }}>
                        <ChatBox
                            onChange={event => inputChatMessage.current = event.target.value}
                            maxRows={6} placeholder={'Message BLOOMChat'} multiline
                        ></ChatBox>
                        <RoundButton
                            disabled={loading}
                            onClick={sendMessage}
                            sx={{
                                ml: 'auto',
                                background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'
                            }}>
                            <SendRoundedIcon fontSize={'small'} sx={{
                                color: theme.palette.grey["900"],
                                display: loading ? 'none' : 'inline-block'
                            }}/>
                            <PauseIcon
                                fontSize={'small'}
                                sx={{
                                    color: theme.palette.grey["900"],
                                    display: loading ? 'inline-block' : 'none'
                                }}
                            />
                        </RoundButton>
                    </BoundingBox>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ChatArea;