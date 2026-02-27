"use client";

import { useEffect, useCallback } from "react";
import css from "./edition.module.css";

interface LightboxProps {
    photos: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }: LightboxProps) {

    const handleKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
    }, [onClose, onPrev, onNext]);

    useEffect(() => {
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [handleKey]);

    return (
        <div className={css.lightboxBackdrop} onClick={onClose}>
            <button className={css.lightboxClose} onClick={onClose} aria-label="Chiudi">✕</button>

            <button
                className={`${css.lightboxArrow} ${css.lightboxArrowLeft}`}
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Precedente"
            >
                ‹
            </button>

            <div className={css.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <img
                    src={photos[currentIndex]}
                    alt={`Foto ${currentIndex + 1}`}
                    className={css.lightboxImg}
                />
                <span className={css.lightboxCounter}>
                    {currentIndex + 1} / {photos.length}
                </span>
            </div>

            <button
                className={`${css.lightboxArrow} ${css.lightboxArrowRight}`}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Successiva"
            >
                ›
            </button>
        </div>
    );
}
