'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './photosButtons'
import useEmblaCarousel from 'embla-carousel-react'
import css from './photos.module.css'

type PropType = {
    slides: PhotoDesc[]
    options?: EmblaOptionsType
}

type PhotoDesc = {
    text: string
    url: string
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
                                <span>SCIENCE NIGHT {val.text}</span>
                            </div>
                            <div className={css.photoSlideContainer}>
                                <div className={css.photoSlideOverlay}></div>
                                <img className={css.photoSlideImg} src={"/img/foto/wallpapers/"+val.url}/>
                            </div>

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
