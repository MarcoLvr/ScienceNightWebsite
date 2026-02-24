import css from './footer.module.css'

export default function Footer(){
    return (
        <footer className={css.footer}>
            <div className={css.footerContainer}>
                <div className={css.footerLogo}>
                    <img src={"/img/logo.png"} />
                </div>
                <div className={css.footerSectionContainer}>
                    <div className={css.footerSection}>
                        <div className={css.miniSection}>
                            <h3>CONTATTI</h3>
                            <div className={css.contacts}>
                                <p>Per informazioni - <a href={"mailto:info@sciencenight.it"}>info@sciencenight.it</a></p>
                                <p>Per richieste commerciali - <a href={"mailto:sales@sciencenight.it"}>sales@sciencenight.it</a></p>
                            </div>
                            <p className={css.address}>Ca’ Vignal 2 - Str. Le Grazie 15, 37134 VR</p>
                        </div>
                        <div className={css.miniSection2}>
                            <h3>LINK UTILI</h3>
                            <div className={css.usefulLinks}>
                                <a>Entra nello staff</a>
                                <a href={"/privacypolicy"}>Privacy Policy</a>
                            </div>

                        </div>
                    </div>
                    <div className={css.footerSection}>
                        <div className={css.miniSectionSocial}>
                            <h3>SOCIAL SCIENCE NIGHT</h3>
                            <div className={css.socials}>
                                <a href={"https://www.instagram.com/sciencenightunivr"}>
                                    <img src={"/img/icons/instagram.svg"} />
                                </a>
                                <a href={"https://www.youtube.com/@sciencenightunivr"}>
                                    <img src={"/img/icons/youtube.svg"} />
                                </a>
                            </div>
                        </div>
                        <div className={css.miniSectionSocial}>
                            <h3>SOCIAL DEBUG</h3>
                            <div className={css.socials}>
                                <a href={"https://www.instagram.com/debugunivr"}>
                                    <img src={"/img/icons/instagram.svg"} />
                                </a>
                                <a href={"https://www.tiktok.com/@debugunivr"}>
                                    <img src={"/img/icons/tiktok.svg"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.copyright}>
                    <p>© 2025 Debug Univr</p>
                </div>
            </div>

        </footer>
    )
}