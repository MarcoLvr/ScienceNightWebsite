import css from "./edition.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { PHOTO_EDITIONS } from "../photosData";
import PhotoGrid from "./PhotoGrid";

export default async function PhotoEditionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const edition = PHOTO_EDITIONS.find((e) => e.slug === slug);

    if (!edition) {
        return (
            <div>
                <Header />
                <div className={css.notFound}>
                    <h1>Edizione non trovata</h1>
                    <Link href="/photos" className="button-glow">Torna alle foto</Link>
                </div><Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div>
                <div className={css.bannerContainer}>
                    <img
                        src={edition.cover}
                        alt={edition.title}
                        className={css.bannerImage}
                    />
                    <div className={css.bannerOverlay}>
                        <h1 className={css.bannerTitle}>{edition.year}</h1>
                        <h2 className={css.bannerSubtitle}>{edition.title}</h2>
                        <span className={css.bannerCount}>{edition.photoNumber} foto</span>
                    </div>
                </div>

                <div className={css.pageContent}>
                    <PhotoGrid photos={edition.photoNumber} year={edition.year} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return PHOTO_EDITIONS.map((e) => ({ slug: e.slug }));
}
