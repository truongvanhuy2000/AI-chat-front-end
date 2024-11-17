import BackgroundOverlay from "../../components/overlay/BackgroundOverlay";
import {Button} from "@mui/material";
import style from "./Landing.module.css"
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";

const title: string = "BLOOMIE"
const secondParagraph: string = "Unleash Your Creativity with Bloom"
const description: string = "Generate stunning images with AI in seconds! Our platform lets you easily create " +
    "unique visuals for any project, from artwork to marketing materials, powered by advanced artificial intelligence"

function LandingPage() {
    return (
        <BackgroundOverlay >
            <div className={style.container}>
                <LandingHeader></LandingHeader>
                <div className={style.content}>
                    <p className={style.title}>{title}</p>
                    <p className={style.secondParagraph}>{secondParagraph}</p>
                    <p className={style.description}>{description}</p>
                    <Button className={style.startButton}>Start Generating Image</Button>
                </div>
                <LandingFooter></LandingFooter>
            </div>
        </BackgroundOverlay>
    )
}

export default LandingPage;