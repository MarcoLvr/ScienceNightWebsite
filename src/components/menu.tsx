import css from './menu.module.css'


export default function Menu(){
    return (
        <div className={css.menu}>
            <div className={css.menuContainer}>
                <div className={css.menuList}>
                    <h2>SCIENCE NIGHT 2026</h2>
                    <div className={css.menuEntries}>
                        <a href={"/"}>Il tema</a>
                        <a href={"/"}>Prevendite</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>NEWS</h2>
                    <div className={css.menuEntries}>
                        <a href={"/"}>Il tema</a>
                        <a href={"/"}>Prevendite</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>SCOPRI SCIENCE NIGHT</h2>
                    <div className={css.menuEntries}>
                        <a href={"/"}>La storia dell'evento</a>
                        <a href={"/"}>Foto delle edizioni precedenti</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>COLLABORA</h2>
                    <div className={css.menuEntries}>
                        <a href={"/"}>Diventa partner</a>
                        <a href={"/"}>Entra nella crew</a>
                    </div>
                </div>
            </div>
        </div>
    )
}