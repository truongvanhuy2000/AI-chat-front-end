import {styled} from "@mui/material";
import Box from "@mui/material/Box";

// Define custom props for the styled component
interface HoverBoxProps {
    selected?: boolean;
}

const BoxMenuItem = styled(Box)<HoverBoxProps>(({ theme, selected }) => ({
    height: '50px',
    backgroundColor: selected ? theme.palette.background.paper : 'transparent', // Change based on selection
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
    paddingLeft: '15px',
    paddingRight: '10px',
    '&:hover': {
        backgroundColor: "#424242",
    },
    '&:active': {
        transform: 'scale(0.95)', // Add a slight shrinking effect on press
    },
    boxSizing: 'border-box',
    width: '100%',
}));

export default BoxMenuItem;