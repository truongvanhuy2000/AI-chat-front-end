import style from "./AppLayout.module.css"
import ResponsiveAppBar from "./header/ResponsiveAppBar";
import {Outlet} from "react-router-dom";
import BackgroundOverlay from "../overlay/BackgroundOverlay";

function AppLayout() {
    return (
        <BackgroundOverlay>
            <div className={style.container}>
                <ResponsiveAppBar></ResponsiveAppBar>
                <div className={style.content}>
                    <Outlet></Outlet>
                </div>
            </div>
        </BackgroundOverlay>
    )
}

export default AppLayout;