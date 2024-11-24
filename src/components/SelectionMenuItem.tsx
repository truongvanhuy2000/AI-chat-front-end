import {Select, styled} from "@mui/material";

const SelectionMenuItem = styled(Select)(({ theme }) => ({
    backgroundColor: 'transparent', // Change based on selection
    color: theme.palette.text.primary,
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none", // Remove the border
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
    },
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light up effect
        transform: "scale(1.05)", // Slight enlargement
    },
    padding: '10px'
}));

export default SelectionMenuItem;