import BackgroundOverlay from "../../components/overlay/BackgroundOverlay";
import {Button} from "@mui/material";
import style from "./Landing.module.css"
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";
import {useNavigate} from "react-router-dom";

const title: string = "BLOOMIE"
const secondParagraph: string = "Eloquent Minds: Your AI Conversation Companion"
const description: string = "Step into a world where brilliance meets conversation. Engage with an AI that’s insightful, " +
    "creative, and always ready to inspire. Whether you seek answers, ideas, or just a chat, we’re here to redefine the art of dialogue"

function LandingPage() {
    const navigate = useNavigate()
    return (
        <BackgroundOverlay >
            <div className={style.container}>
                <LandingHeader></LandingHeader>
                <div className={style.content}>
                    <p className={style.title}>{title}</p>
                    <p className={style.secondParagraph}>{secondParagraph}</p>
                    <p className={style.description}>{description}</p>
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