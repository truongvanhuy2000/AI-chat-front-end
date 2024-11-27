import BoundingBox from "./BoundingBox";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import {ReactComponent as RobotSVG} from '../assets/robot-face-icon.svg';
import {ReactTyped} from "react-typed";

function LoadingBotChatBubble() {
    return (
        <Stack
            key={9999}
            direction='row'
            gap='20px'
            sx={{
                justifyContent: 'flex-start',
            }}
        >
            <RobotSVG style={{ width: '50px'}}/>
            <BoundingBox sx={{background: 'transparent'}}>
                <Typography color={'textPrimary'}>
                    <ReactTyped strings={["Thinking ..."]} typeSpeed={30} loop={true} showCursor={false}/>
                </Typography>
            </BoundingBox>
        </Stack>
    )
}

export default LoadingBotChatBubble;