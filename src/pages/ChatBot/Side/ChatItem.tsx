import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import BoxMenuItem from "../../../components/BoxMenuItem";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from "@mui/material/Typography";
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import {ReactComponent as MessageSVG} from '../../../assets/message-192.svg';

function ChatItem({itemName, isSelected, onClick}) {
    return (
        <BoxMenuItem selected={isSelected} onClick={onClick} sx={{height: '40px'}}>
            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexGrow: 1,
            }}>
                <Stack direction='row' gap='10px'>
                    <MessageSVG style={{ width: '20px'}}/>
                    <Typography>{itemName}</Typography>
                </Stack>
                {isSelected &&
                    <Stack direction='row' gap='5px'>
                        <EditOutlinedIcon fontSize={'small'}/>
                        <DeleteOutlinedIcon fontSize={'small'} />
                    </Stack>
                }
            </Box>
        </BoxMenuItem>

    )
}

export default ChatItem;