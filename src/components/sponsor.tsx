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
        AutoScroll({ playOnInit: true, stopOnInteraction: false, startDelay: 0, speed: 2 }),
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
        <div className={css.embla} dir={options?.direction}>
            <div className={css.embla__viewport} ref={emblaRef}>
                <div className={css.embla__container}>
                    {slides.map((slide, index) => (
                        <div className={css.embla__slide} key={index}>
                            <div className={css.embla__slide__number}>
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
