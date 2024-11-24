import {styled} from "@mui/material";
import Box from "@mui/material/Box";

const BoundingBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey["700"],
    borderRadius: '20px',
    padding: '10px 10px 10px 10px',
    boxSizing: 'border-box',
    display: "flex",
    flexDirection: 'column',
    color: theme.palette.text.primary
}))

export default BoundingBox;