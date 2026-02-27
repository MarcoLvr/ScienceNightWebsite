import css from "./photos.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PHOTO_EDITIONS } from "./photosData";
import Image from "next/image";

export default function PhotosPage() {
    return (
        <div>
            <Header />
            <div className={css.bannerContainer}>
                <div className={css.bannerOverlay}>
                    <h1 className={css.bannerTitle}>Science Night</h1>
                    <h2 className={css.bannerSubtitle}>Photos</h2>
                </div>
                <Image
                    className={css.bannerImage}
                    src="/img/photos/banner.jpg"
                    alt="Photos banner"
                    fill
                    unoptimized
                    priority
                />
            </div>
            <div className={css.pageWrapper}>


                <div className={css.grid}>
                    {PHOTO_EDITIONS.map((edition) => (
                        <a
                            key={edition.slug}
                            href={`/photos/${edition.slug}`}
                            className={css.card}
                        >
                            <div className={css.cardImageWrapper}>
                                <img
                                    src={edition.cover}
                                    alt={edition.title}
                                    className={css.cardImage}
                                />
                                <div className={css.cardOverlay} />
                            </div>
                            <div className={css.cardInfo}>
                                <span className={css.cardYear}>{edition.year}</span>
                                <h2 className={css.cardTitle}>{edition.title}</h2>
                                <span className={css.cardCount}>{edition.photoNumber} foto</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
