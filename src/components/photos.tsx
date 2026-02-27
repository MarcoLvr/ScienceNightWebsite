'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './photosButtons'
import useEmblaCarousel from 'embla-carousel-react'
import css from './photos.module.css'
import {PREFIX} from "@/app/photos/photosData";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const PhotosCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

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
                                <img className={css.photoSlideImg} src={`${PREFIX}/thumbs/${val}.webp`}/>
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
