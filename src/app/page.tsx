import Image from "next/image";
import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from '@/code/countdown';
import SponsorCarousel from '@/components/sponsor';

const SLIDES = [
    '/img/testimg.png',
    '/img/testimg.png',
    '/img/testimg.png',
    '/img/testimg.png',
    '/img/testimg.png'
];

const slides2 = Array.from(SLIDES).reverse();

export default function Home() {
  return (
    <div>
        <Header />
        <div>
            <div className={css.bannerContainer}>
                <div className={css.bannerText}>
                    <h1 className={css.bannerTitle}>RISE FROM THE ASHES</h1>
                    <h1 className={css.bannerCountdown}><Countdown target={new Date('2026-06-05')} /></h1>
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
                        <p>"Ora voi o risorgete come squadra o cederete un centimetro alla volta, uno stand dopo l'altro fino alla disfatta".
                        Queste sono le parole di chi, fino al 2017, ha sempre cercato di supportare l'evento prima che l'organizzazione crollasse nell'oblio.
                        Ma le cose stanno cambiando. Il momento della rinascita di Festa scienze, ribrandizzata in Science Night, è giunto e ora più che mai la nuova organizzazione si sta preparando
                        a far risplendere l'evento più rinnomato dell'Università di Verona. Tic Tac, il tempo scorre. Preparati alla nuova edizione di Science Night!</p>
                    </div>
                    <div>
                        <a href="#" className="button-glow">
                            ESPLORA ORA
                            <img src={"/img/btn.svg"} alt={""}/>
                        </a></div>
                </div>
            </div>

            <div className={css.newsSection}>
                <div className={css.newsTitle}>
                    <span>Le ultime novità</span>
                </div>
                <div className={css.newsContainer}>
                    <div className={css.news}>
                        <div className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>FOTO 2017</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/testimg.png"}/>
                            </div>
                        </div>
                        <div className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>FOTO 2017</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/testimg.png"}/>
                            </div>
                        </div>
                        <div className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>FOTO 2017</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/testimg.png"}/>
                            </div>
                        </div>
                        <div className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>FOTO 2017</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/testimg.png"}/>
                            </div>
                        </div>
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
                    <div>
                        <a href="#" className="button-glow">
                            DIVENTA PARTNER
                            <img src={"/img/btn.svg"} alt={""}/>
                        </a>
                    </div>
                </div>
                <div className={css.sponsorCarousels}>
                    <div>
                        <SponsorCarousel slides={SLIDES} options={{loop: true}} />
                    </div>
                    <div>
                        <SponsorCarousel slides={slides2} options={{direction: "rtl",loop: true}}/>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <span>Un'idea di un piccolo gruppo</span>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                        <div>
                            <a href="#" className="button-glow">
                                LEGGI LA STORIA
                                <img src={"/img/btn.svg"} alt={""}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <span>Il meglio delle edizioni precedenti</span>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        <a href="#" className="button-glow">
                            TUTTE LE FOTO
                            <img src={"/img/btn.svg"} alt={""}/>
                        </a>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
    </div>
  );
}
