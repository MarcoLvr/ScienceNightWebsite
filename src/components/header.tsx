'use client'
import css from './header.module.css'
import { useState } from 'react';

import Menu from './menu';

export default function Header(){

    const [isOpen,setIsOpen]=useState(false);

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
                    <button onClick={()=>setIsOpen(!isOpen)} >
                        <img src={"img/burger.svg"} alt="menu" />
                    </button>
                </div>
            </header>
            {isOpen && <Menu/>}
        </div>

    )
}