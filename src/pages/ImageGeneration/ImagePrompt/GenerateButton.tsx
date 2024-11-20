import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import style from "./GenerateButton.module.css"

function GenerateButton() {
    return (
        <Button className={style.generateButton}>
            <AutoFixHighIcon/>
            <Typography>Generate</Typography>
        </Button>
    )
}

export default GenerateButton;