import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import BoxMenuItem from "../../../components/BoxMenuItem";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from "@mui/material/Typography";
import {ReactComponent as MessageSVG} from '../../../assets/message-192.svg';
import HoverableIcon from "../../../components/HoverableIcon";
import ChatAPI from "../../../services/ChatAPI";
import {useContext} from "react";
import {ChatAPIContext, ChatListContext, ChatListContextProps} from "../ChatBot";
import Chat from "../../../model/Chat";

interface ChatItemProps {
    item?: Chat,
    isSelected: boolean,
    onClick: () => void,
}

function ChatItem({item, isSelected, onClick}: ChatItemProps) {
    const chatAPI: ChatAPI = useContext<ChatAPI>(ChatAPIContext)
    const {setChats}: ChatListContextProps = useContext(ChatListContext);

    async function onClickEditChat() {

    }

    async function onClickDeleteChat() {
        try {
            await chatAPI.deleteChat(item?.id)
            const chatList = await chatAPI.getChatList()
            setChats(chatList)
        } catch (e) {

        }
    }

    return (
        <BoxMenuItem selected={isSelected} onClick={onClick} sx={{height: '40px'}}>
            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexGrow: 1,
            }}>
                <Stack direction='row' gap='10px'>
                    <MessageSVG style={{ width: '20px'}}/>
                    <Typography>{item?.name}</Typography>
                </Stack>
                {isSelected &&
                    <Stack direction='row'>
                        <HoverableIcon onClick={onClickEditChat} sx={{padding: '4px'}}>
                            <EditOutlinedIcon fontSize={'small'}/>
                        </HoverableIcon>
                        <HoverableIcon onClick={onClickDeleteChat} sx={{padding: '4px'}}>
                            <DeleteOutlinedIcon fontSize={'small'} />
                        </HoverableIcon>
                    </Stack>
                }
            </Box>
        </BoxMenuItem>

    )
}

export default ChatItem;