import style from "./AppLayout.module.css"
import ResponsiveAppBar from "./header/ResponsiveAppBar";
import {Outlet} from "react-router-dom";
import BackgroundOverlay from "../overlay/BackgroundOverlay";

function AppLayout() {
    return (
        <div className={style.container}>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout;