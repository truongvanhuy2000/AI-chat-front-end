import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import Typography from "@mui/material/Typography";
import {Stack, useTheme} from "@mui/material";
import {ReactComponent as RobotSVG} from '../../../assets/robot-face-icon.svg';
import {ReactComponent as UserSVG} from '../../../assets/user-462.svg';
import ReactMarkdown from 'react-markdown';

interface ChatBubbleProps {
    message: Message,
    index: number,
}

function ChatBubble({message, index}: ChatBubbleProps) {
    const theme = useTheme()
    const messageDisplay = message.role === Role.BOT
        ? <>
            <RobotSVG style={{ width: '50px'}}/>
            <BoundingBox sx={{background: 'transparent'}}>
                <Typography color={'textPrimary'}>
                    <ReactMarkdown>{message.message}</ReactMarkdown>
                </Typography>
            </BoundingBox>
        </>
        : <>
            <BoundingBox sx={{background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'}}>
                <Typography sx={{color: theme.palette.grey["900"]}}>{message.message}</Typography>
            </BoundingBox>
            <UserSVG style={{ width: '50px'}}/>
        </>;

    return (
        <Stack
            key={index}
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