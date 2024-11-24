import {Button, styled} from "@mui/material";

const ColorfulGradientButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(81deg, #e6fa72 6%, #62ffb8 58%)", // Correct way to apply gradient
    color: '#484848', // White text
    padding: "10px 20px",
    textTransform: "none", // Prevent uppercase text transformation
    transition: "all 0.2s ease-in-out", // Smooth transitions

    "&:hover": {
        filter: "brightness(120%)",
        transform: "scale(1.05)", // Slight enlargement
    },

    "&:active": {
        transform: "scale(0.95)", // Shrink on click
    },
}));

export default ColorfulGradientButton;