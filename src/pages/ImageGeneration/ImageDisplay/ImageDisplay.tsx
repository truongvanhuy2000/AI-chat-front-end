import style from "./ImageDisplay.module.css"
import Box from "@mui/material/Box";
import GradientAiImageOverlay from "../../../components/overlay/GradientAiImageOverlay";

function ImageDisplay() {
    return (
        <GradientAiImageOverlay>
            <Box className={style.container}>

            </Box>
        </GradientAiImageOverlay>
    )
}

export default ImageDisplay;