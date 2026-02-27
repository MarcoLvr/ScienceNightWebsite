import css from './menu.module.css'


export default function Menu(){
    return (
        <div className={css.menu}>
            <div className={css.menuContainer}>
                <div className={css.menuList}>
                    <h2>SCIENCE NIGHT 2026</h2>
                    <div className={css.menuEntries}>
                        <a href={"/comingsoon"}>Il tema</a>
                        <a href={"/comingsoon"}>Prevendite</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>NEWS</h2>
                    <div className={css.menuEntries}>
                        <a href={"/comingsoon"}>Sito rinnovato</a>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"}>Debug Homecoming Aftermovie</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>SCOPRI SCIENCE NIGHT</h2>
                    <div className={css.menuEntries}>
                        <a href={"/story"}>La storia dell'evento</a>
                        <a href={"/photos"}>Foto delle edizioni precedenti</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>COLLABORA</h2>
                    <div className={css.menuEntries}>
                        <a href={"/comingsoon"}>Diventa partner</a>
                        <a href={"/comingsoon"}>Entra nella crew</a>
                    </div>
                </div>
            </div>
        </div>
    )
}