import {Button, styled} from "@mui/material";

const WhiteStyledButton = styled(Button)(({ theme }) => ({
    border: "2px solid", // White border
    borderColor: "hsla(0, 0%, 100%, 0.15)",
    backgroundColor: "transparent", // Transparent background
    color: theme.palette.text.primary, // White text
    textTransform: "none", // Prevent uppercase text transformation
    transition: "all 0.2s ease-in-out", // Smooth transitions
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light up effect
        transform: "scale(1.05)", // Slight enlargement
    },
    padding: 0,

    "&:active": {
        transform: "scale(0.95)", // Shrink on click
    },
}));

export default WhiteStyledButton;