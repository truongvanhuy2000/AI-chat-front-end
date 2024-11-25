import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import Typography from "@mui/material/Typography";
import {Stack, useTheme} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {SiProbot} from "react-icons/si";

interface ChatBubbleProps {
    message: Message,
}

function ChatBubble({message}: ChatBubbleProps) {
    const theme = useTheme()
    const messageDisplay = message.role === Role.BOT
        ? <>
            <SiProbot color={theme.palette.primary.main} size={'30px'}/>
            <BoundingBox sx={{background: 'transparent'}}>
                <Typography color={'textPrimary'}>{message.message}</Typography>
            </BoundingBox>
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