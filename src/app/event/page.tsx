import Image from "next/image";
import css from "./event.module.css";
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
        <Header />
        <div>
            <div className={css.bannerContainer}>
                <div className={css.bannerText}>
                    <div>
                        <h1>Science Night</h1>
                        <h2>2026</h2>
                    </div>
                    <h1 className={css.bannerTitle}>RISE FROM THE ASHES</h1>
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
                        <h1>La fenice, simbolo della rinascita</h1>
                    </div>
                    <div className={css.newYearDesc}>
                        <p>La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest’anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente il passato.
                            Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato. </p>
                    </div>
                    <div>
                        <a href="/comingsoon" className="button-glow">
                            ESPLORA ORA
                        </a></div>
                </div>
            </div>

            <div className={css.storySection}>
                <div className={css.storyTitle}>
                    <span>Vivi la rinascita</span>
                </div>
                <div className={css.storyContainer}>
                    <div className={css.storyText}>
                        <div className={css.storyDescription}>
                            <p>
                                "Ora voi o risorgete  come squadra o cederete un centimetro alla volta, uno stand dopo
                                l'altro fino alla disfatta". Queste sono le parole di chi, fino al 2017,
                                ha  sempre cercato di supportare l'evento prima che l'organizzazione crollasse nell'oblio.
                                Gli anni successivi infatti la festa subì un forte declino a causa del COVID rendendo la realizzazione
                                dell'evento post-pandemia molto difficile. Ma le cose stanno cambiando. Il momento della
                                rinascita di Festa scienze, ribrandizzata in Science Night, è giunto e ora più che mai la
                                nuova organizzazione si sta preparando a far risplendere l'evento più rinnomato dell'Università di Verona.
                                Sì, Science Night sta veramente risorgendo dalle ceneri!
                            </p>
                        </div>
                    </div>
                    <div className={css.storyImageContainer}>
                        <div className={css.storyImage}>
                            <img src={"/img/story.webp"} alt={"story"}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.newsSection}>
                <div className={css.newsTitle}>
                    <span>Info generali</span>
                </div>
                <div className={css.newsContainer}>
                    <div className={css.news}>
                        <a href={"/comingsoon"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>SITO RINNOVATO</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/foto/eventi/homecoming25/wallpaper.webp"}/>
                            </div>
                        </a>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"} target={"_blank"} rel={"noopener noreferrer"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>DEBUG HOMECOMING AFTERMOVIE</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/foto/eventi/homecoming25/wallpaper3.webp"}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={css.newsSection}>
                <div className={css.newsTitle}>
                    <span>Lineup</span>
                </div>
                <div className={css.newsContainer}>
                    <div className={css.news}>
                        <a href={"/comingsoon"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>SITO RINNOVATO</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/foto/eventi/homecoming25/wallpaper.webp"}/>
                            </div>
                        </a>
                        <a href={"https://www.youtube.com/watch?v=IHaE2CYc1n8"} target={"_blank"} rel={"noopener noreferrer"} className={css.newsElement}>
                            <div className={css.newsTag}>
                                <span>DEBUG HOMECOMING AFTERMOVIE</span>
                            </div>
                            <div className={css.newsImage}>
                                <div className={css.newsImageOverlay}></div>
                                <img src={"/img/foto/eventi/homecoming25/wallpaper3.webp"}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={css.partnerSection}>
                <div className={css.partnerTitleContainer}>
                    <div className={css.partnerTitle}>
                        <span>I partner di questa edizione</span>
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



            <div className={css.photosSection}>
                <div className={css.photosTitle}>
                    <span>Il meglio delle edizioni precedenti</span>
                </div>
                <div>
                    <div>
                        <PhotosCarousel slides={[{text: "2017", url: "2017.webp"}, {text: "2016", url: "2016.webp"}, {text: "2015", url: "2015.webp"}, {text: "2014", url: "2014.webp"}, {text: "2013", url: "2013.webp"}, {text: "2012", url: "2012.webp"}]} />
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
