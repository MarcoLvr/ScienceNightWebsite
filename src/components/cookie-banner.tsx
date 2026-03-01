'use client';

import { useEffect, useState } from 'react';
import css from './cookie-banner.module.css';

const GA_ID = 'G-6WCM488GTN';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    function loadGA() {
        if (document.getElementById('ga-script')) return;
        const script1 = document.createElement('script');
        script1.id = 'ga-script';
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
        `;
        document.head.appendChild(script2);
    }

    function accept() {
        localStorage.setItem('cookie-consent', 'accepted');
        loadGA();
        setVisible(false);
    }

    function decline() {
        localStorage.setItem('cookie-consent', 'declined');
        setVisible(false);
    }

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setVisible(true);
        } else if (consent === 'accepted') {
            loadGA();
        }
    }, []);

    if (!visible) return null;

    return (
        <div className={css.overlay}>
            <div className={css.banner}>
                <div className={css.text}>
                    <p className={css.title}>Utilizziamo i cookie 🍪</p>
                    <p className={css.desc}>
                        Science Night usa Google Analytics per analizzare il traffico in modo anonimo.
                        Nessun dato personale viene venduto o condiviso con terze parti.
                    </p>
                </div>
                <div className={css.actions}>
                    <button onClick={decline} className={css.declineBtn}>Rifiuta</button>
                    <button onClick={accept} className={css.acceptBtn}>Accetta</button>
                </div>
            </div>
        </div>
    );
}
