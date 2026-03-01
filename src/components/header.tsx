'use client'
import css from './header.module.css'
import { useState } from 'react';

import Menu from './menu';
import Image from "next/image";

export default function Header(){

    const [isOpen,setIsOpen]=useState(false);

    return (
        <div>
            <header className={css.header}>
                <div className={css.logo}>
                    <a href={"/"}><Image src={"/img/logo.png"} height={75} width={75} alt="logo" /></a>
                </div>
                <div className={css.headerTitle}>
                    <h2>Science Night</h2>
                </div>
                <div className={css.menu}>
                    <button onClick={()=>setIsOpen(!isOpen)} >
                        <Image height={50} width={50} src={"/img/burger.svg"} alt="menu" />
                    </button>
                </div>
            </header>
            {isOpen && <Menu/>}
        </div>

    )
}