import {Button, styled} from "@mui/material";

const RoundButton = styled(Button)(({ theme }) => ({
    borderRadius: '50%', // Makes the button round
    minWidth: 0,         // Prevents the button from stretching
    padding: 0,          // Removes internal padding
    width: '35px',
    aspectRatio: '1/1',
    backgroundColor: theme.palette.grey["700"], // Button background color
    color: 'white',      // Button text color
    '&:hover': {
        backgroundColor: theme.palette.grey["600"], // Darker on hover
        transform: "scale(1.05)"
    },
    "&:active": {
        transform: "scale(0.95)", // Shrink on click
    },
}));

export default RoundButton;