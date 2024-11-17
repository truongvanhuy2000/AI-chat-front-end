import {AppBar, IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Landing.module.css"

function LandingHeader() {
    return (
        <AppBar className={style.transparentAppBar}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon sx={{color: "#66fcf1"}} ></MenuIcon>
                </IconButton>
                <h3>MENU</h3>
            </Toolbar>
        </AppBar>
    )
}

export default LandingHeader;