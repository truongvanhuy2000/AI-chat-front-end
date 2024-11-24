import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
interface ChatBubbleProps {
    message: Message,
}

function ChatBubble({message}: ChatBubbleProps) {
    const messageDisplay = message.role === Role.BOT
        ? <>
            <SmartToyOutlinedIcon color='primary' fontSize={'large'}/>
            <Typography color={'textPrimary'}>{message.message}</Typography>
        </>
        : <>
            <BoundingBox sx={{background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'}}>
                <Typography sx={{color: '#2f2f2f'}}>{message.message}</Typography>
            </BoundingBox>
            <AccountCircleRoundedIcon color='primary' fontSize={'large'}/>
        </>;

    return (
        <Stack
            direction='row'
            gap='20px'
            sx={{
                justifyContent: message.role === Role.BOT ? 'flex-start' : 'flex-end',
            }}
        >
            {messageDisplay}
        </Stack>

    )
}

export default ChatBubble;