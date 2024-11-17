import style from "./BackgroundOverlay.module.css"

function BackgroundOverlay(props) {
    return (
        <div className={style.container}>
            <div className={style.background} >
                <div className={style.overlay}></div>
            </div>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundOverlay;