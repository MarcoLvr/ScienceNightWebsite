// src/app/photos/[slug]/PhotoGrid.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import css from "./edition.module.css";
import Lightbox from "./Lightbox";
import {PREFIX} from "@/app/photos/photosData";
import Image from "next/image";

const BATCH_SIZE = 30;
const COLUMNS_DESKTOP = 4;
const COLUMNS_TABLET = 3;
const COLUMNS_MOBILE_SM = 2;
const COLUMNS_MOBILE = 1;

function getColumnCount(): number {
    if (typeof window === "undefined") return COLUMNS_DESKTOP;
    const w = window.innerWidth;
    if (w <= 500) return COLUMNS_MOBILE;
    if (w <= 800) return COLUMNS_MOBILE_SM;
    if (w <= 1200) return COLUMNS_TABLET;
    return COLUMNS_DESKTOP;
}

function distributeToColumns(photos: string[], colCount: number): string[][] {
    const cols: string[][] = Array.from({ length: colCount }, () => []);
    photos.forEach((src, i) => {
        cols[i % colCount].push(src);
    });
    return cols;
}

export default function PhotoGrid({ photos, year }: { photos: number; year: string }) {
    const [visibleCount, setVisibleCount] = useState(Math.min(BATCH_SIZE, photos));
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [colCount, setColCount] = useState(COLUMNS_DESKTOP);
    const sentinelRef = useRef<HTMLDivElement>(null);

    const allPhotos = useRef<string[]>(
        Array.from({ length: photos }, (_, i) =>
            `${PREFIX}/${year}/${i + 1}.webp`
        )
    );

    // Aggiorna colonne al resize
    useEffect(() => {
        const update = () => setColCount(getColumnCount());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (visibleCount >= photos) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, photos));
                }
            },
            { rootMargin: "400px" }
        );

        const el = sentinelRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, [visibleCount, photos]);

    const visiblePhotos = allPhotos.current.slice(0, visibleCount);
    const columns = distributeToColumns(visiblePhotos, colCount);

    const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
    const closeLightbox = () => setLightboxIndex(null);
    const prevPhoto = () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos) % photos : null));
    const nextPhoto = () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos : null));

    return (
        <>
            <div className={css.masonryGrid}>
                {columns.map((col, colIdx) => (
                    <div key={colIdx} className={css.masonryCol}>
                        {col.map((src, rowIdx) => {
                            const globalIndex = rowIdx * colCount + colIdx;
                            return (
                                <button
                                    key={src}
                                    className={css.photoItem}
                                    onClick={() => openLightbox(globalIndex)}
                                    aria-label={`Apri foto ${globalIndex + 1}`}
                                >
                                    <img
                                        src={src}
                                        alt={`Foto ${globalIndex + 1}`}
                                        className={css.photoThumb}
                                        loading={"lazy"}
                                    />
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>

            {visibleCount < photos && (
                <div ref={sentinelRef} className={css.sentinel} />
            )}

            {lightboxIndex !== null && (
                <Lightbox
                    photos={allPhotos.current}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevPhoto}
                    onNext={nextPhoto}
                />
            )}
        </>
    );
}
