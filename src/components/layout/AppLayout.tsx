import style from "./AppLayout.module.css"
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div className={style.container}>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout;