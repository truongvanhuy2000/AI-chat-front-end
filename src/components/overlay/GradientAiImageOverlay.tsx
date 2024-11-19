import style from "./GradientAiImageOverlay.module.css";

function GradientAiImageOverlay(props: any) {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.overlay}></div>
            </div>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

export default GradientAiImageOverlay;