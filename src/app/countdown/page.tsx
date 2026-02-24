import Image from "next/image";
import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from '@/code/countdown';
import SponsorCarousel from '@/components/sponsor';
import PhotosCarousel from '@/components/photos';

const folder = '/img/sponsor/2018/';

const SLIDES = [
    folder + 'sponsor_2018_agsm.webp',
    folder + 'sponsor_2018_benetti.webp',
    folder + 'sponsor_2018_cantinavalpantena.webp',
    folder + 'sponsor_2018_casadeltrattore.webp',
    folder + 'sponsor_2018_foodora.webp',
    folder + 'sponsor_2018_fusushi.webp',
    folder + 'sponsor_2018_inkaddiction.webp',
    folder + 'sponsor_2018_labottega.webp',
    folder + 'sponsor_2018_lanuovatecnica.webp',
    folder + 'sponsor_2018_lasuite.webp',
    folder + 'sponsor_2018_porgilaltrapancia.webp',
    folder + 'sponsor_2018_tgella.webp'
];

const slides1 = SLIDES.slice(0, SLIDES.length / 2);
const slides2 = SLIDES.slice(SLIDES.length / 2, SLIDES.length);

export default function Home() {
  return (
    <div>
        <div className={css.bannerContainer}>
            <div className={css.bannerText}>
                <div className={css.newYearBrand}>
                    <img src={"img/logo.svg"} alt="logo" />
                    <h1>Science Night</h1>
                    <h2>2026</h2>
                </div>
                <h1 className={css.bannerTitle}>RISE FROM THE ASHES</h1>
                <h1 className={css.bannerCountdown}><Countdown target={new Date(Date.UTC(2026, 5,5, 17,30,0))} /></h1>
            </div>
            <div className={css.bannerVideo}>
                <iframe
                    src={`https://stream.hydromcstudios.com?path=sciencenight/banner/banner.m3u8&muted=1&nocontrols=1&loop=1`}
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                    //allow="autoplay"
                    allowFullScreen
                />
            </div>
        </div>
    </div>
  );
}
