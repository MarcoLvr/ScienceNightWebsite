import Image from "next/image";
import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from '@/code/countdown';
import SponsorCarousel from '@/components/sponsor';
import PhotosCarousel from '@/components/photos';

const folder = '/img/sponsor/2018/';

const SLIDES = [
    folder + 'sponsor_2018_agsm.jpg',
    folder + 'sponsor_2018_benetti.jpg',
    folder + 'sponsor_2018_cantinavalpantena.jpg',
    folder + 'sponsor_2018_casadeltrattore.jpg',
    folder + 'sponsor_2018_foodora.jpg',
    folder + 'sponsor_2018_fusushi.jpg',
    folder + 'sponsor_2018_inkaddiction.jpg',
    folder + 'sponsor_2018_labottega.jpg',
    folder + 'sponsor_2018_lanuovatecnica.jpg',
    folder + 'sponsor_2018_lasuite.jpg',
    folder + 'sponsor_2018_porgilaltrapancia.jpg',
    folder + 'sponsor_2018_tgella.jpg'
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
