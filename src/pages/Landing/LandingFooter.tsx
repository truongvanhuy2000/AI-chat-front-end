import style from "./LandingFooter.module.css"

function LandingFooter() {
    return (
        <div className={style.footer}>
            <div className={style.navigation}>
                <a className={style.navItem} href="#about">About Me</a>
                <a className={style.navItem} href="#contact">Contact</a>
                <a className={style.navItem} href="#privacy">Privacy Policy</a>
            </div>
            <div className={style.copyright}>
                © 2024 BLOOMIE. All Rights Reserved
            </div>
        </div>
    )
}

export default LandingFooter;
