'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import css from './sponsor.module.css'

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}


const SponsorCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, startDelay: 0, speed: 1 }),
    ])
    const [isPlaying, setIsPlaying] = useState(false)


    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll
            if (!autoScroll) return

            const resetOrStop =
                autoScroll.options.stopOnInteraction === false
                    ? autoScroll.reset
                    : autoScroll.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    return (
        <div className={css.sponsor} dir={options?.direction}>
            <div className={css.sponsorViewport} ref={emblaRef}>
                <div className={css.sponsorContainer}>
                    {slides.map((slide, index) => (
                        <div className={css.sponsorSlide} key={index}>
                            <div className={css.sponsorSlideInner}>
                                <img src={slide} alt={"sponsor"}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SponsorCarousel
