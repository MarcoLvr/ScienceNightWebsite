import css from './footer.module.css'

export default function Footer(){
    return (
        <footer className={css.footer}>
            <div className={css.footerContainer}>
                <div className={css.footerLogo}>
                    <img src={"/img/logo.svg"} />
                </div>
                <div className={css.footerSectionContainer}>
                    <div className={css.footerSection}>
                        <div className={css.miniSection}>
                            <h3>CONTATTI</h3>
                            <div>
                                <p>Per informazioni - info@sciencenight.it</p>
                                <p>Per richieste commerciali - sales@sciencenight.it</p>
                            </div>
                            <p>Ca’ Vignal 2 - Str. Le Grazie 15, 37134 VR</p>
                        </div>
                        <div className={css.miniSection}>
                            <h3>LINK UTILI</h3>
                            <a>Entra nello staff</a>
                            <a>Privacy Policy</a>
                        </div>
                    </div>
                    <div className={css.footerSection}>
                        <div className={css.miniSection}>
                            <h3>SOCIAL SCIENCE NIGHT</h3>
                            <div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className={css.miniSection}>
                            <h3>SOCIAL DEBUG</h3>
                            <div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>© 2025 Debug Univr</p>
                </div>
            </div>

        </footer>
    )
}