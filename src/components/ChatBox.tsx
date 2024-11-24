import {styled, TextField} from "@mui/material";

const ChatBox = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "transparent", // Default border color
        },
        "&:hover fieldset": {
            borderColor: "transparent", // Hover border color
        },
        "&.Mui-focused fieldset": {
            borderColor: "transparent", // Focused border color
        },
    },
    width: "100%",
}));

export default ChatBox;