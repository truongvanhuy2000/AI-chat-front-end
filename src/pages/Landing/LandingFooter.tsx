import style from "./Landing.module.css"

function LandingFooter() {
    return (
        <div className={style.footer}>
            <div className={style.navigation}>
                <a href="#about">About Me</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
            <div className={style.copyright}>
                © 2024 BLOOMIE. All Rights Reserved
            </div>
        </div>
    )
}

export default LandingFooter;
