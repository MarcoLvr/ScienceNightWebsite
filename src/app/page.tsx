import Image from "next/image";
import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from '@/code/countdown';

export default function Home() {
  return (
    <div>
        <Header />
        <div>
            <div className={css.banner}>
                <h1 className={css.bannerTitle}>RISE FROM THE ASHES</h1>
                <h1 className={css.bannerCountdown}><Countdown target={new Date('2026-06-05')} /></h1>
            </div>
            <div className={css.video}>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                    <div>
                        <a href="#" className="button-glow">
                            ESPLORA ORA
                            <img src={"/img/btn.svg"} alt={""}/>
                        </a></div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <h1>Le ultime novità</h1>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
