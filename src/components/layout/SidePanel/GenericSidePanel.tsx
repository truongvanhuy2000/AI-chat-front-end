import {styled} from "@mui/material";
import Box from "@mui/material/Box";

const GenericSidePanel = styled(Box)(({ theme }) => ({
    display: 'flex', // Use quotes for JavaScript object keys
    flexDirection: 'column', // Proper camelCase for CSS properties
    gap: '20px', // Specify units for spacing properties
    color: 'white', // No `!important` in `sx`
    backgroundColor: theme.palette.grey["900"], // No `!important` in `sx`
    width: '300px',
    padding: '10px 10px 10px 10px',
    boxSizing: 'border-box', // CamelCase for CSS properties
    height: '100vh'
}))

export default GenericSidePanel;