import {Message, Role} from "../../../model/Message";
import BoundingBox from "../../../components/BoundingBox";
import Typography from "@mui/material/Typography";
import {Stack, useTheme} from "@mui/material";
import {ReactComponent as RobotSVG} from '../../../assets/robot-9.svg';
import ReactMarkdown from 'react-markdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HoverableIcon from "../../../components/HoverableIcon";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useSnackbar} from "notistack";
import {useState} from "react";

interface ChatBubbleProps {
    message: Message,
    index: number,
}

function ChatBubble({message, index}: ChatBubbleProps) {
    const theme = useTheme()
    const {enqueueSnackbar} = useSnackbar();
    const [isHovered, setIsHovered] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(message.message).then(() => {
            enqueueSnackbar("Copied to clipboard", {variant: 'success'});
        })
    }

    function onMouseEnter() {
        setIsHovered(true)
    }

    function onMouseLeave() {
        setIsHovered(false)
    }

    const messageDisplay = message.role === Role.BOT
        ? <>
            <RobotSVG style={{width: '50px', flexShrink: 0}}/>
            <BoundingBox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={{background: !isHovered ? 'transparent': theme.palette.grey["A700"]}}>
                <Typography color={'textPrimary'}>
                    <ReactMarkdown>{message.message}</ReactMarkdown>
                </Typography>
                <HoverableIcon onClick={copyToClipboard}
                               sx={{width: '30px', visibility: isHovered ? 'visible' : 'hidden'}}>
                    <ContentCopyIcon fontSize={'small'} sx={{color: theme.palette.primary.main}}/>
                </HoverableIcon>
            </BoundingBox>
        </>
        : <>
            <BoundingBox sx={{background: 'linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)'}}>
                <Typography sx={{color: theme.palette.grey["900"]}}>{message.message}</Typography>
            </BoundingBox>
            <AccountCircleIcon sx={{color: theme.palette.primary.main, flexShrink: 0}} fontSize={'large'}/>
        </>;

    return (
        <Stack
            key={index}
            direction='row'
            gap='20px'
            sx={{
                alignItems: 'flex-start',
                justifyContent: message.role === Role.BOT ? 'flex-start' : 'flex-end',
            }}
        >
            {messageDisplay}
        </Stack>

    )
}

export default ChatBubble;