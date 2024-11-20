import {Button, TextField} from "@mui/material";
import style from "./PromptTextBox.module.css"
import Box from "@mui/material/Box";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function PromptTextBox() {
    return (
        <Box className={style.container}>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Default Value"
            />
            <Box>
                <Button
                    style={{
                        color: "#62ffb8",
                        backgroundColor: "#3e7554"
                }}>
                    <AutoAwesomeIcon/>
                </Button>
            </Box>
        </Box>
    )
}

export default PromptTextBox;