import css from './menu.module.css'
import Link from "next/link";


export default function Menu(){
    return (
        <div className={css.menu}>
            <div className={css.menuContainer}>
                <div className={css.menuList}>
                    <h2>SCIENCE NIGHT 2026</h2>
                    <div className={css.menuEntries}>
                        <Link href={"/event/2026"}>Il tema</Link>
                        <Link href={"/event/2026"}>Prevendite</Link>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>NEWS</h2>
                    <div className={css.menuEntries}>
                        <Link href={"/comingsoon"}>Sito rinnovato</Link>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"}>Debug Homecoming Aftermovie</a>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>SCOPRI SCIENCE NIGHT</h2>
                    <div className={css.menuEntries}>
                        <Link href={"/story"}>La storia dell&apos;evento</Link>
                        <Link href={"/photos"}>Foto delle edizioni precedenti</Link>
                    </div>
                </div>
                <div className={css.menuList}>
                    <h2>COLLABORA</h2>
                    <div className={css.menuEntries}>
                        <Link href={"/partner"}>Diventa partner</Link>
                        <Link href={"/crew"}>Entra nella crew</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}