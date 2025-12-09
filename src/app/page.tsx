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
                        <p>"Ora voi o risorgete come squadra o cederete un centimetro alla volta, uno stand dopo l'altro fino alla disfatta".
                        Queste sono le parole di chi, fino al 2017, ha sempre cercato di supportare l'evento prima che l'organizzazione crollasse nell'oblio.
                        Ma le cose stanno cambiando. Il momento della rinascita di Festa scienze, ribrandizzata in Science Night, è giunto e ora più che mai la nuova organizzazione si sta preparando
                        a far risplendere l'evento più rinnomato dell'Università di Verona. Tic Tac, il tempo scorre. Preparati alla nuova edizione di Science Night!</p>
                    </div>
                    <div>
                        <a href="/comingsoon" className="button-glow">
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
                                <img src={"/img/foto/eventi/homecoming25/wallpaper.jpg"}/>
                            </div>
                        </a>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"} target={"_blank"} rel={"noopener noreferrer"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>DEBUG HOMECOMING AFTERMOVIE</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/foto/eventi/homecoming25/wallpaper3.jpg"}/>
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
                        <a href="/comingsoon" className="button-glow">
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
                    <span>Un'idea di un piccolo gruppo</span>
                </div>
                <div className={css.storyContainer}>
                    <div className={css.storyText}>
                        <div className={css.storyDescription}>
                            <p>
                                Il 19 giugno 2009 viene organizzata per la prima volta la "Festa a scienze".
                                Quell'anno accademico (2008-2009) era stato segnato dal D.L. Gelmini che
                                spinse molti studenti a mobilitarsi a seguito della riforma universitaria.
                                Tra questi anche Wudy, al secolo Walter Riviera, che in quell'anno venne eletto
                                (per la prima volta) come rappresentante della facoltà di Scienze MM.FF.NN.
                                Sin dall'inizio della sua esperienza da rappresentante si trovò a fronteggiare un
                                problema ben noto a molte università italiane: la diffidenza ed il clima
                                freddo dell'ambiente universitario
                            </p>
                        </div>
                        <div className={css.readStoryButton}>
                            <a href="/comingsoon" className="button-glow">
                                LEGGI LA STORIA
                            </a>
                        </div>
                    </div>
                    <div className={css.storyImageContainer}>
                        <div className={css.storyImage}>
                            <img src={"/img/story.jpg"} alt={"story"}/>
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
                        <PhotosCarousel slides={[{text: "2017", url: "2017.jpg"}, {text: "2016", url: "2016.jpg"}, {text: "2015", url: "2015.jpg"}, {text: "2014", url: "2014.jpg"}, {text: "2013", url: "2013.jpg"}, {text: "2012", url: "2012.jpg"}]} />
                    </div>
                    <div className={css.photosButtonContainer}>
                        <a href="/comingsoon" className="button-glow">
                            TUTTE LE FOTO
                        </a>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
    </div>
  );
}
