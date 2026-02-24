import Image from "next/image";
import css from "./story.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const editions = [
    {
        year: "edition",
        title: "La nascita di festascienze",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2009.webp",
        slug: "edition",
    },
    {
        year: "2010",
        title: "La festa del riscatto",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2010.webp",
        slug: "2010",
    },
    {
        year: "2011",
        title: "Shosholoza",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2011.webp",
        slug: "2011",
    },
    {
        year: "2012",
        title: "Ho&apos;oponopono",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2012.webp",
        slug: "2012",
    },
    {
        year: "2013",
        title: "The show must go on",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2013.webp",
        slug: "2013",
    },
    {
        year: "2014",
        title: "Don&apos;t stop believin",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2014.webp",
        slug: "2014",
    },
    {
        year: "2015",
        title: "Let&apos;s be ohana",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2015.webp",
        slug: "2015",
    },
    {
        year: "2016",
        title: "Memento audere semper",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2016.webp",
        slug: "2016",
    },
    {
        year: "2017",
        title: "Festascienze is us",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2017.webp",
        slug: "2017",
    },
    {
        year: "2024",
        title: "Turn on the research",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2024.webp",
        slug: "2024",
    },
    {
        year: "2025",
        title: "Science Night",
        description: "La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente del passato. Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.",
        image: "/img/story/wp_2025.webp",
        slug: "2025",
    },
];

export default function StoryPage() {
    return (
        <div>
            <Header />
            <div>
                <div className={css.bannerContainer}>
                    <div className={css.bannerOverlay}>
                        <h1 className={css.bannerTitle}>Science Night</h1>
                        <h2 className={css.bannerSubtitle}>Our story</h2>
                    </div>
                    <Image
                        className={css.bannerImage}
                        src="/img/story/banner.webp"
                        alt="Story banner"
                        fill
                        unoptimized
                        priority
                    />
                </div>

                <div className={css.storiesSection}>
                    {editions.map((edition, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <a
                                key={edition.slug}
                                href={`/story/${edition.slug}`}
                                className={`${css.storyItem} ${isEven ? css.storyItemLeft : css.storyItemRight}`}
                            >
                                {isEven ? (
                                    <>
                                        <div className={css.storyTextBlock}>
                                            <span className={css.storyYear}>{edition.year}</span>
                                            <h2
                                                className={css.storyTitle}
                                                dangerouslySetInnerHTML={{ __html: edition.title }}
                                            />
                                            <p className={css.storyDesc}>{edition.description}</p>
                                        </div>
                                        <div className={css.storyImageBlock}>
                                            <div className={css.storyImageWrapper}>
                                                <img
                                                    src={edition.image}
                                                    alt={edition.title}
                                                    className={css.storyImg}
                                                />
                                                <div className={css.storyImageOverlay} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={css.storyImageBlock}>
                                            <div className={css.storyImageWrapper}>
                                                <img
                                                    src={edition.image}
                                                    alt={edition.title}
                                                    className={css.storyImg}
                                                />
                                                <div className={css.storyImageOverlay} />
                                            </div>
                                        </div>
                                        <div className={`${css.storyTextBlock} ${css.storyTextRight}`}>
                                            <span className={css.storyYear}>{edition.year}</span>
                                            <h2
                                                className={css.storyTitle}
                                                dangerouslySetInnerHTML={{ __html: edition.title }}
                                            />
                                            <p className={css.storyDesc}>{edition.description}</p>
                                        </div>
                                    </>
                                )}
                            </a>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
