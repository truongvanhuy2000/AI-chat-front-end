import BackgroundOverlay from "../../components/overlay/BackgroundOverlay";
import {Button} from "@mui/material";
import style from "./Landing.module.css"
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";

const title: string = "BLOOM"
const secondParagraph: string = "Eloquent Minds: Your AI Conversation Companion"
const description: string = "Step into a world where brilliance meets conversation. Engage with an AI that’s insightful, " +
    "creative, and always ready to inspire. Whether you seek answers, ideas, or just a chat, we’re here to redefine the art of dialogue"

function LandingPage() {
    const navigate = useNavigate()
    return (
        <BackgroundOverlay>
            <div className={style.container}>
                <LandingHeader></LandingHeader>
                <div className={style.content}>
                    <Typography
                        sx={{
                            color: '#66fcf1',
                            fontSize: {
                                xl: '170px', md: '170px', sm: '80px', xs: '80px'
                            },
                            fontFamily: '"Noto Sans", serif',
                            fontWeight: 700,
                            lineHeight: {
                                xl: '195px', md: '195px', sm: '55px', xs: '55px'
                            },
                            margin: 0,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#c5c6c7',
                            fontSize: {
                                xl: '24px', md: '24px', sm: '15px', xs: '15px'
                            },
                            fontFamily: '"Roboto Mono", serif',
                            fontWeight: 700,
                            lineHeight: '32px',
                            textAlign: 'center',
                            margin: 0,
                        }}
                    >
                        {secondParagraph}
                    </Typography>
                    <Typography
                        sx={{
                            display: {
                                xl: 'inline-block', md: 'inline-block', sm: 'none', xs: 'none'
                            },
                            width: '600px',
                            color: '#c5c6c7',
                            fontSize: '16px',
                            fontFamily: '"Roboto Mono", serif',
                            lineHeight: '24px',
                            textAlign: 'center',
                            margin: 0,
                        }}
                    >
                        {description}
                    </Typography>
                    <Button className={style.startButton} onClick={() => {
                        navigate("/chat")
                    }}>Start Chatting</Button>
                </div>
                <LandingFooter></LandingFooter>
            </div>
        </BackgroundOverlay>
    )
}

export default LandingPage;