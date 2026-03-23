'use client'
import React, { useEffect, useRef, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './photosButtons'
import useEmblaCarousel from 'embla-carousel-react'
import css from './photos.module.css'
import {PREFIX} from "@/app/photos/photosData";
import Image from "next/image";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const PhotosCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Crea sentinella con Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Quando la sentinella entra in viewport, carica TUTTE le immagini
                    if (entry.isIntersecting) {
                        setImagesLoaded(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '100px', // Inizia a caricare 100px prima di entrare in viewport
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    return (
        <section className={css.photosCarousel}>
            <div className={css.photosViewport} ref={emblaRef}>
                <div className={css.photosCarouselContainer}>
                    {slides.map((val, index) => (
                        <div className={css.photoSlide} key={index}>
                            <div className={css.photoText}>
                                <span>SCIENCE NIGHT {val}</span>
                            </div>
                            <a href={`/photos/${val}`} className={css.photoSlideContainer}>
                                <div className={css.photoSlideOverlay}></div>
                                {imagesLoaded && (
                                    <Image fill={true} alt={""} className={css.photoSlideImg} src={`${PREFIX}/thumbs/${val}.webp`}/>
                                )}
                                {!imagesLoaded && (
                                    <div className={css.photoPlaceholder} />
                                )}
                            </a>

                        </div>
                    ))}
                </div>
            </div>

            <div className={css.photoDots}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={css.embla__dot.concat(
                            index === selectedIndex ? ' '+css.embla__dot__selected : ''
                        )}
                    />
                ))}
            </div>
        </section>
    )
}

export default PhotosCarousel
