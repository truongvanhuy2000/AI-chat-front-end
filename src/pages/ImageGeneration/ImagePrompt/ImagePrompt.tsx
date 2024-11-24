import Box from "@mui/material/Box";
import style from "./ImagePrompt.module.css"
import {Select, Tab, Tabs} from "@mui/material";
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import PromptTextBox from "./PromptTextBox";
import GenerateButton from "./GenerateButton";
import React from "react";
import ImageIcon from '@mui/icons-material/Image';
import MenuItem from "@mui/material/MenuItem";
import ButtonTab from "../../../components/tab/ButtonTab";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const styleList: string[] = ["Anime", "Photo", "Digital Art", "Painting"]

function ImagePrompt(props: any) {
    const [value, setValue] = React.useState(0);
    const [imageStyle, setImageStyle] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleStyleChange = (event, newValue) => {
        setImageStyle(newValue);
    }

    return (
        <Box className={style.container}>
            <Box className={style.horizontalContainer}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <ButtonTab icon={<><FontDownloadOutlinedIcon/>Text to Image</>} {...a11yProps(0)} />
                    <ButtonTab icon={<><ImageIcon/>Image to Image</>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <PromptTextBox></PromptTextBox>
            <GenerateButton/>
            <Box className={`${style.horizontalContainer} ${style.spacingBetween}`}>
                <Select variant={'outlined'} sx={{width: 100}}>
                    <MenuItem value={'1:1'}>1:1</MenuItem>
                    <MenuItem value={'4:3'}>4:3</MenuItem>
                    <MenuItem value={'3:4'}>3:4</MenuItem>
                    <MenuItem value={'16:9'}>16:9</MenuItem>
                    <MenuItem value={'9:16'}>9:16</MenuItem>
                </Select>
            </Box>
            <Box></Box>
            <Box className={`${style.horizontalContainer} ${style.center}`}>
                <Tabs value={imageStyle} onChange={handleStyleChange} aria-label="basic tabs example">
                    {
                        styleList.map((item, index) => {
                            return (<Tab label={item} {...a11yProps(index)} />)
                        })
                    }
                </Tabs>
            </Box>
        </Box>
    )
}

export default ImagePrompt;