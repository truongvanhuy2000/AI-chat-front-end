import {IconButton, styled} from "@mui/material";

const HoverableIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.main, // Default color
    "&:hover": {
        color: theme.palette.primary.main, // Color on hover
        transform: "scale(1.2)", // Slight enlargement
        transition: "transform 0.2s ease-in-out", // Smooth transition
        backgroundColor: theme.palette.grey['700'],
    },
    borderRadius: "4px",
}));

export default HoverableIcon;