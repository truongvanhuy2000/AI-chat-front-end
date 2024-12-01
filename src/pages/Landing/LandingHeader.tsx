import {AppBar, IconButton, Toolbar, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Landing.module.css"
import Typography from "@mui/material/Typography";

function LandingHeader() {
    const theme = useTheme()
    return (
        <AppBar className={style.transparentAppBar}>
            <Toolbar>
                {/*<IconButton*/}
                {/*    size="large"*/}
                {/*    edge="start"*/}
                {/*    aria-label="open drawer"*/}
                {/*>*/}
                {/*    <MenuIcon sx={{color: "#66fcf1"}} ></MenuIcon>*/}
                {/*</IconButton>*/}
            </Toolbar>
        </AppBar>
    )
}

export default LandingHeader;