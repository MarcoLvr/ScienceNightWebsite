import Image from "next/image";
import css from "./story.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const editions = [
    {
        year: "2009",
        title: "La nascita di festascienze",
        description: "Il 19 giugno 2009 viene organizzata per la prima volta la \"Festa a scienze\". Quell'anno accademico (2008-2009) era stato segnato dal D.L. Gelmini che spinse molti studenti a mobilitarsi a seguito della riforma universitaria...",
        image: "/img/story/wp_2009.webp",
        slug: "2009",
    },
    {
        year: "2010",
        title: "La festa del riscatto",
        description: "Cercando di far tesoro dall'esperienza precedente, vennero introdotte alcune modifiche sostanziali nell'intero assetto organizzativo...",
        image: "/img/story/wp_2010.webp",
        slug: "2010",
    },
    {
        year: "2011",
        title: "Shosholoza",
        description: "L'edizione 2010 era andata bene per quanto riguarda l'aspetto organizzativo, ma rimanevano ancora alcune cose da migliorare. Aspetti sostanziali, come quelli economici...",
        image: "/img/story/wp_2011.webp",
        slug: "2011",
    },
    {
        year: "2012",
        title: "Ho&apos;oponopono",
        description: "Il 2012 fu un anno molto importante per la Festa di Scienze. All'inizio, in fase di organizzazione, si doveva tenere conto dei problemi degli anni scorsi...",
        image: "/img/story/wp_2012.webp",
        slug: "2012",
    },
    {
        year: "2013",
        title: "The show must go on",
        description: "Benchè dopo 5 anni di esperienza molte dinamiche \"organizzative\" fossero ben collaudate, la sfida maggiore del 2013 risiedeva nel \"passaggio di testimone\" a livello organizzativo in vista della vicina laurea di Wudy (al secolo Walter Riviera), \"padre fondatore\" dell'evento",
        image: "/img/story/wp_2013.webp",
        slug: "2013",
    },
    {
        year: "2014",
        title: "Don&apos;t stop believin",
        description: "Il 2014 è stato l'anno di un importante cambiamento per la Festa di Scienze: il suo ideatore e fondatore, dopo essersi laureato, ha passato le redini dell'organizzazione al consolidato ed affiatato gruppo composto da Lino, Paolino, Ale Ago, Diego, Malfa e Ale Fin (I Magnifici Sei). ",
        image: "/img/story/wp_2014.webp",
        slug: "2014",
    },
    {
        year: "2015",
        title: "Let&apos;s be ohana",
        description: "Il 2015 è stato l'anno del consolidamento e del tentato passaggio di testimone. L'organizzazione, affidata sempre al gruppo collaudato dei Magnifici 6 (Lino, Paolino, Ale Ago, Malfa, Ale Fin e Diego), è stata impeccabile sotto tutti i punti di vista. L'organigramma dello staff organizzativo è rimasto uguale a quello del 2014, però con l'obbiettivo di aggiungere per ogni gruppo almeno una nuova leva \"promettente per le future feste\"...",
        image: "/img/story/wp_2015.webp",
        slug: "2015",
    },
    {
        year: "2016",
        title: "Memento audere semper",
        description: "Nel 2016 la festa si è svolta in un clima di grande incertezza. Dopo 6 anni di organizzazione, i \"Magnifici 6\" (Lino, Paolino, Ale Ago, Malfa, Ale Fin e Diego) hanno lasciato le redini dell'organizzazione a un gruppo di studenti che non aveva mai fatto parte dello staff organizzativo prima d'ora...",
        image: "/img/story/wp_2016.webp",
        slug: "2016",
    },
    {
        year: "2017",
        title: "Festascienze is us",
        description: "Non si hanno notizie o parole ufficiali su come la festa del 2017 sia stata organizzata, ma una cosa è certa: qualcosa non quadrava. È stata scritta la seguente lettera dalla vecchia amministrazione, che lascia intendere che ci siano stati problemi organizzativi e che la festa sia stata a rischio annullamento fino all'ultimo minuto...",
        image: "/img/story/wp_2017.webp",
        slug: "2017",
    },
    {
        year: "2024",
        title: "Turn on the research",
        description: "Pagina ancora in lavorazione!",
        image: "/img/story/wp_2024.webp",
        slug: "2024",
    },
    {
        year: "2025",
        title: "Science Night",
        description: "Pagina ancora in lavorazione!",
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
                            <Link
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
                                                <Image
                                                    fill={true}
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
                                                <Image
                                                    fill={true}
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
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
