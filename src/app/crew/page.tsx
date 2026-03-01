import Image from "next/image";
import css from "./crew.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function StaffPage() {
    return (
        <div>
            <Header />

            <div className={css.bannerContainer}>
                <div className={css.bannerOverlay}>
                    <h1 className={css.bannerTitle}>Science Night</h1>
                    <h2 className={css.bannerSubtitle}>La nostra famiglia</h2>
                </div>
                <Image
                    fill={true}
                    className={css.bannerImage}
                    src="/img/crew/banner.webp"
                    alt="Staff banner"
                    priority
                />
            </div>

            <div className={css.pageContent}>

                <section className={css.introSection}>
                    <span className={css.introLabel}>Chi siamo</span>
                    <h2 className={css.introTitle}>Non un gruppo. Una famiglia.</h2>
                    <p className={css.introText}>
                        Dal 2009 ad oggi, ogni edizione di Science Night è nata dalle mani, dalla testa
                        e dal cuore di centinaia di studenti volontari. Studenti che hanno scelto di
                        mettere in gioco il proprio tempo, le proprie energie e spesso anche i propri
                        esami, pur di costruire qualcosa di più grande di loro stessi.
                    </p>
                    <p className={css.introText}>
                        Quello staff non è mai stato lo stesso: ogni anno qualcuno si laurea,
                        qualcuno arriva per la prima volta, qualcuno prende le redini, qualcuno
                        le passa. Eppure, nonostante i volti cambino, l&apos;anima rimane intatta.
                    </p>
                </section>

                <section className={css.imageSection}>
                    <div className={css.imageSectionText}>
                        <h3 className={css.sectionTitle}>Nasce da un&apos;idea, cresce con le persone</h3>
                        <p className={css.textParagraph}>
                            Tutto è partito da un gruppo di studenti riuniti dopo le lezioni in un
                            corridoio di Ca&apos; Vignal. Nessun budget garantito, nessuna esperienza
                            pregressa, solo la convinzione che l&apos;università potesse essere un posto
                            più caldo e accogliente.
                        </p>
                        <p className={css.textParagraph}>
                            Anno dopo anno quello spirito ha contagiato decine, poi centinaia di
                            persone. Nel 2014 lo staff contava già più di 100 componenti tra
                            organizzativo ed esecutivo. Ogni nuovo arrivo portava idee fresche,
                            energia nuova, e soprattutto voglia di fare.
                        </p>
                    </div>
                    <div className={css.imageSectionImg}>
                        <div className={css.imageWrapper}>
                            <Image fill src="/img/crew/crew_1.webp" alt="Crew al lavoro" className={css.sectionImg} />
                        </div>
                    </div>
                </section>

                <section className={`${css.imageSectionReversed} ${css.imageSection}`}>
                    <div className={css.imageSectionImg}>
                        <div className={css.imageWrapper}>
                            <Image fill src="/img/crew/crew_2.webp" alt="Crew durante la festa" className={css.sectionImg} />
                        </div>
                    </div>
                    <div className={css.imageSectionText}>
                        <h3 className={css.sectionTitle}>Sacrifici reali, risultati veri</h3>
                        <p className={css.textParagraph}>
                            Fare parte dello staff non è solo divertimento. Significa partecipare
                            alle riunioni, mandare decine di email agli sponsor, montare
                            stand sotto il sole di giugno, e a volte rimandare qualcosa di
                            personale per rispettare una scadenza organizzativa.
                        </p>
                        <p className={css.textParagraph}>
                            Come scrisse il fondatore Walter Riviera in una lettera aperta allo staff:
                            <em> «Ho passato notti insonni per questa festa, ho trascurato molte
                                persone per questa festa, e l&apos;ultimo anno ho trascurato anche
                                l&apos;università per questa festa.»</em>
                        </p>
                        <p className={css.textParagraph}>
                            È questo il livello di dedizione che, anno dopo anno, ha reso possibile
                            l&apos;impossibile.
                        </p>
                    </div>
                </section>

                <section className={css.quoteSection}>
                    <blockquote className={css.quote}>
                        «In ogni scontro è colui il quale è disposto a morire che guadagna un centimetro.
                        La vita è un gioco di centimetri, e così è la festa.»
                    </blockquote>
                    <span className={css.quoteAuthor}>— Walter Riviera, fondatore, 2017</span>
                </section>

                <section className={css.imageSection}>
                    <div className={css.imageSectionText}>
                        <h3 className={css.sectionTitle}>Il testimone non si perde, si passa</h3>
                        <p className={css.textParagraph}>
                            La vera forza di questa famiglia è la continuità. Dal primo passaggio
                            di testimone nel 2013, quando Wudy lasciò le redini ai &quot;Magnifici Sei&quot;,
                            fino ad oggi, ogni generazione ha saputo raccogliere ciò che la
                            precedente aveva seminato.
                        </p>
                        <p className={css.textParagraph}>
                            Il motto del 2015 racchiude tutto:
                            <em> «This is not the end, just the beginning of a new era.» </em>
                             Perché ogni laurea non è una fine, è un passaggio. Lo staff
                            sopravvive alle persone che lo compongono, e si arricchisce
                            ogni anno di chi sceglie di mettersi in gioco.
                        </p>
                    </div>
                    <div className={css.imageSectionImg}>
                        <div className={css.imageWrapper}>
                            <Image fill src="/img/crew/crew_3.webp" alt="Passaggio di testimone" className={css.sectionImg} />
                        </div>
                    </div>
                </section>

                <section className={css.ctaSection}>
                    <h3 className={css.ctaTitle}>Vuoi far parte della famiglia?</h3>
                    <p className={css.ctaText}>
                        Ogni anno apriamo le iscrizioni allo staff. Non servono competenze
                        particolari, serve solo la voglia di mettersi in gioco e contribuire
                        a qualcosa che dura nel tempo.
                    </p>
                    <a target={"_blank"} href="https://forms.office.com/e/tA439QTgmw" className="button-glow">
                        Compila il form
                    </a>
                </section>

            </div>
            <Footer/>
        </div>
    );
}
