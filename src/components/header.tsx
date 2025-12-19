import css from './header.module.css'

import Menu from './menu';

export default function Header(){
    return (
        <div>
            <header className={css.header}>
                <div className={css.logo}>
                    <button><img src={"img/logo.svg"} alt="logo" /></button>
                </div>
                <div className={css.headerTitle}>
                    <h2>Science Night</h2>
                </div>
                <div className={css.menu}>
                    <button>
                        <img src={"img/burger.svg"} alt="menu" />
                    </button>
                </div>
            </header>
            <Menu />
        </div>

    )
}