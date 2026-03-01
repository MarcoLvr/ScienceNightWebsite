import Image from "next/image";
import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from '@/code/countdown';
import SponsorCarousel from '@/components/sponsor';
import PhotosCarousel from '@/components/photos';
import Link from "next/link";

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
        <Header />
        <div>
            <div className={css.bannerContainer}>
                <div className={css.bannerText}>
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
            <div className={css.bannerShadowContainer}>
                <Image className={css.bannerShadow} src={"/img/shadow.png"} width={1920} height={200} unoptimized alt={"shadow"}/>
            </div>

            <div className={css.newYearSection}>
                <div className={css.newYearContainer}>
                    <div className={css.newYearBrand}>
                        <h1>Science Night</h1>
                        <h2>2026</h2>
                    </div>
                    <div className={css.newYearDesc}>
                        <h1>RISE FROM THE ASHES</h1>
                    </div>
                    <div className={css.newYearDesc}>
                        <p>&quot;Ora voi o risorgete come squadra o cederete un centimetro alla volta, uno stand dopo l&apos;altro fino alla disfatta&quot;.
                        Queste sono le parole di chi, fino al 2017, ha sempre cercato di supportare l&apos;evento prima che l&apos;organizzazione crollasse nell&apos;oblio.
                        Ma le cose stanno cambiando. Il momento della rinascita di Festa scienze, ribrandizzata in Science Night, è giunto e ora più che mai la nuova organizzazione si sta preparando
                        a far risplendere l&apos;evento più rinnomato dell&apos;Università di Verona. Tic Tac, il tempo scorre. Preparati alla nuova edizione di Science Night!</p>
                    </div>
                    <div>
                        <a href="/event/2026" className="button-glow">
                            ESPLORA ORA
                        </a></div>
                </div>
            </div>

            <div className={css.newsSection}>
                <div className={css.newsTitle}>
                    <span>Le ultime novità</span>
                </div>
                <div className={css.newsContainer}>
                    <div className={css.news}>
                        <a href={"/comingsoon"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>SITO RINNOVATO</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <Image src={"/img/foto/eventi/homecoming25/wallpaper.webp"} fill={true} alt={"Sito rinnovato"}/>
                            </div>
                        </a>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"} target={"_blank"} rel={"noopener noreferrer"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>DEBUG HOMECOMING AFTERMOVIE</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <Image src={"/img/foto/eventi/homecoming25/wallpaper3.webp"} fill={true} alt={"Debug Homecoming Aftermovie"}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={css.partnerSection}>
                <div className={css.partnerTitleContainer}>
                    <div className={css.partnerTitle}>
                        <span>I partner di Science Night</span>
                        <div className={css.partnerYearContainer}>
                            <span className={css.partnerYear}>del 2018</span>
                        </div>
                    </div>
                    <div className={css.becomePartner}>
                        <a href="/partner" className="button-glow">
                            DIVENTA PARTNER
                        </a>
                    </div>
                </div>
                <div className={css.sponsorCarousels}>
                    <div>
                        <SponsorCarousel slides={slides1} options={{loop: true}} />
                    </div>
                    <div>
                        <SponsorCarousel slides={slides2} options={{direction: "rtl",loop: true}}/>
                    </div>
                </div>
                <div className={css.becomePartnerBottom}>
                    <a href="/comingsoon" className="button-glow">
                        DIVENTA PARTNER
                    </a>
                </div>
            </div>

            <div className={css.storySection}>
                <div className={css.storyTitle}>
                    <span>Un&apos;idea di un piccolo gruppo</span>
                </div>
                <div className={css.storyContainer}>
                    <div className={css.storyText}>
                        <div className={css.storyDescription}>
                            <p>
                                Il 19 giugno 2009 viene organizzata per la prima volta la &quot;Festa a scienze&quot;.
                                Quell&apos;anno accademico (2008-2009) era stato segnato dal D.L. Gelmini che
                                spinse molti studenti a mobilitarsi a seguito della riforma universitaria.
                                Tra questi anche Wudy, al secolo Walter Riviera, che in quell&apos;anno venne eletto
                                (per la prima volta) come rappresentante della facoltà di Scienze MM.FF.NN.
                                Sin dall&apos;inizio della sua esperienza da rappresentante si trovò a fronteggiare un
                                problema ben noto a molte università italiane: la diffidenza ed il clima
                                freddo dell&apos;ambiente universitario
                            </p>
                        </div>
                        <div className={css.readStoryButton}>
                            <Link href="/story" className="button-glow">
                                LEGGI LA STORIA
                            </Link>
                        </div>
                    </div>
                    <div className={css.storyImageContainer}>
                        <div className={css.storyImage}>
                            <Image src={"/img/story.webp"} fill={true} alt={"story"}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.photosSection}>
                <div className={css.photosTitle}>
                    <span>Il meglio delle edizioni precedenti</span>
                </div>
                <div>
                    <div>
                        <PhotosCarousel slides={[
                            2025, 2024, 2018, 2017, 2016, 2015
                        ]} />
                    </div>
                    <div className={css.photosButtonContainer}>
                        <Link href="/photos" className="button-glow">
                            TUTTE LE FOTO
                        </Link>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
    </div>
  );
}
