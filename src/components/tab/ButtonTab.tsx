import {styled, Tab} from "@mui/material";

const ButtonTab = styled(Tab)(({theme}) => ({
    backgroundColor: 'transparent', // Button-like background
    color: theme.palette.common.white, // Text color
    borderRadius: theme.shape.borderRadius, // Rounded corners
    '&:hover': {
        backgroundColor: "#626161", // Darker on hover
    },
    '&.Mui-selected': {
        backgroundColor: '#66fcf1', // Different color when selected
        color: "#262525"
    },
    '&.Mui-focusVisible': {
        outline: `2px solid ${theme.palette.secondary.light}`, // Focus outline
    },
}));

export default ButtonTab