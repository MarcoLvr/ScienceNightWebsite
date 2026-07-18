import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import PhotosCarousel from '@/components/photos';

export default function Event2026() {
    return (
        <div>
            <Header />

            <div className={css.banner}>
                <Image className={css.bannerBg} src="/img/edizioni/2026/back.webp" alt="Crowd background" fill style={{objectFit: 'cover'}} />
                <div className={css.titleContainer}>
                    <h1 className={css.mainTitle}>Science Night 2026</h1>
                    <h2 className={css.subTitle}>RISE FROM THE ASHES</h2>
                </div>
            </div>

            <div className={css.darkSectionWrapper}>
                <div className={css.section}>
                    <div className={css.textImageRow}>
                        <div className={css.textContent}>
                            <h2 className={css.sectionTitle}>La fenice, simbolo della rinascita</h2>
                            <p>
                                La fenice è un simbolo chiave per segnare la rinascita di qualcosa ma anche per indicare un cambiamento importante o una restaurazione. Quest'anno la fenice vi accompagnerà durante tutta la vostra esperienza in Science Night che è rinata con una nuova faccia ma tenendo a mente il passato.
                                Science Night 2026 non è solo una festa ma è anche un nuovo punto di partenza che vuole dare il via a una nuova serie di fantastiche edizioni con tante novità e richiami dal passato.
                            </p>
                        </div>
                        <div className={css.imageContent}>
                            <Image src="/img/edizioni/2026/fenicesmall.webp" alt="Fenice" width={200} height={200} className={css.phoenixSmall} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={css.textImageRow}>
                    <div className={css.textContent}>
                        <h2 className={css.sectionTitle}>Vivi la rinascita</h2>
                        <p>
                            "Ora voi o risorgete come squadra o cederete un centimetro alla volta, uno stand dopo l'altro fino alla disfatta". Queste sono le parole di chi, fino al 2017, ha sempre cercato di supportare l'evento prima che l'organizzazione crollasse nell'oblio. Gli anni successivi infatti la festa subì un forte declino a causa del COVID e problemi organizzativi. Ma le cose stanno cambiando. Il momento della rinascita di Festa scienze, ribrandizzata in Science Night, è giunto e ora più che mai la nuova organizzazione si sta preparando a far risplendere l'evento più rinomato dell'Università di Verona. Sì, Science Night sta veramente risorgendo dalle ceneri!
                        </p>
                    </div>
                    <div className={css.imageContent}>
                        <Image src="/img/edizioni/2026/fenice.webp" alt="Fenice in volo" width={1000} height={300} className={css.phoenixLarge} />
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <h2 className={css.sectionTitle}>Info generali</h2>
                <div className={css.infoGrid}>
                    <div className={css.infoItem}>
                        <img src={"/img/icons/calendar.svg"} alt={"Calendario"}></img>
                        <span className={css.infoText}>5 giugno 2026</span>
                    </div>
                    <div className={css.infoItem}>
                        <img src={"/img/icons/pin.svg"} alt={"Pin"}></img>
                        <span className={css.infoText}>Strada le grazie 15, Verona</span>
                    </div>
                    <div className={css.infoItem}>
                        <img src={"/img/icons/clock.svg"} alt={"Orologio"}></img>
                        <span className={css.infoText}>18:00 - 00:00</span>
                    </div>
                </div>

                <div className={css.servicesRow}>
                    <img src={"/img/icons/parking.svg"} alt={"Parcheggio gratuito"}></img>
                    <img src={"/img/icons/bagni.svg"} alt={"Bagni"}></img>
                    <img src={"/img/icons/food.svg"} alt={"Cibo"}></img>
                    <img src={"/img/icons/drink.svg"} alt={"Drink"}></img>
                    <img src={"/img/icons/free.svg"} alt={"Ingresso gratuito"}></img>
                </div>
            </div>

            <div className={css.section}>
                <h2 className={css.sectionTitle}>Programma</h2>
                <div className={css.timelineContainer}>
                    <div className={css.timelineLine}></div>
                    <div className={css.timelineEvents}>
                        <div className={`${css.timelineEvent} ${css.down}`}>
                            <span className={css.eventTime}>18:00</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>Apertura</div>
                                <div className={css.eventDesc}>e inizio<br/>open lab</div>
                            </div>
                        </div>
                        <div className={`${css.timelineEvent} ${css.up}`}>
                            <span className={css.eventTime}>19:00</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>Science Show</div>
                                <div className={css.eventDesc}>e apertura<br/>cucine</div>
                            </div>
                        </div>
                        <div className={`${css.timelineEvent} ${css.down}`}>
                            <span className={css.eventTime}>20:30</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>Termine open lab</div>
                            </div>
                        </div>
                        <div className={`${css.timelineEvent} ${css.up}`}>
                            <span className={css.eventTime}>21:00</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>Piero Giaccone</div>
                                <div className={css.eventDesc}>con cerimonia<br/>di apertura</div>
                            </div>
                        </div>
                        <div className={`${css.timelineEvent} ${css.down}`}>
                            <span className={css.eventTime}>22:30</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>DJ Miche</div>
                            </div>
                        </div>
                        <div className={`${css.timelineEvent} ${css.up}`}>
                            <span className={css.eventTime}>00:00</span>
                            <div className={css.timeDot}></div>
                            <div className={css.eventDetails}>
                                <div className={css.eventTitle}>Termine dell'evento</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <h2 className={css.sectionTitle}>Lineup</h2>
                <div className={css.lineupGrid}>
                    <div className={css.lineupCard}>
                        <Image src="/img/edizioni/2026/show.webp" alt="Science Show" width={300} height={200} className={css.lineupImage} />
                        <h3 className={css.lineupName}>SCIENCE SHOW</h3>
                        <span className={css.lineupGenre}>Spettacolo di intrattenimento</span>
                        <p className={css.lineupDesc}>Inizia a scaldarti insieme al nostro staff che ti coinvolgerà con storie, battute, meme e tanto altro.</p>
                    </div>
                    <div className={css.lineupCard}>
                        {/* Placeholder DJ */}
                        <Image src="/img/edizioni/2026/piero.webp" alt="PIERO GIACCONE" width={1000} height={200} className={css.lineupImage} />
                        <h3 className={css.lineupName}>PIERO GIACCONE</h3>
                        <span className={css.lineupGenre}>DJ SET</span>
                        <a href="https://www.instagram.com/pierogiaccone" target="_blank" rel="noopener noreferrer" className={css.igLink}>
                            <img src="/img/icons/instagram.svg" alt="Instagram" className={css.igIcon} />
                            <span>@pierogiaccone</span>
                        </a>
                    </div>
                    <div className={css.lineupCard}>
                        {/* Placeholder DJ */}
                        <Image src="/img/edizioni/2026/djmiche.webp" alt="DJ MICHE" width={1000} height={200} className={css.lineupImage} />
                        <h3 className={css.lineupName}>DJ MICHE</h3>
                        <span className={css.lineupGenre}>DJ SET</span>
                        <a href="https://www.instagram.com/miche_701" target="_blank" rel="noopener noreferrer" className={css.igLink}>
                            <img src="/img/icons/instagram.svg" alt="Instagram" className={css.igIcon} />
                            <span>@miche_701</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={css.partnerHeader}>
                    <h2 className={css.sectionTitle} style={{margin: 0}}>I partner di questa edizione</h2>
                    <Link href="/partner" className="button-glow">DIVENTA PARTNER</Link>
                </div>
                <div className={css.partnerGrid}>
                    <div className={css.partnerItem}>
                        <Image src="/img/sponsor/2026/univr.webp" width={900} height={200} alt="Università di Verona" />
                    </div>
                    <div className={css.partnerItem}>
                        <Image src="/img/sponsor/2026/esu.webp" width={820} height={200} alt="ESU" />
                    </div>
                    <div className={css.partnerItem}>
                        <Image src="/img/sponsor/2026/labottega.webp" width={800} height={200} alt="La bottega" />
                    </div>
                    <div className={css.partnerItem}>
                        <Image src="/img/sponsor/2026/dot.webp" width={1000} height={300} alt="Dot Print" />
                    </div>
                    <div className={css.partnerItem}>
                        <Image src="/img/sponsor/2026/clipper.webp" width={1000} height={300} alt="Bar Clipper" />
                    </div>
                </div>
            </div>

            <div id={"FAQ"} className={css.section}>
                <h2 className={css.sectionTitle}>Domande Frequenti (FAQ)</h2>
                <div className={css.faqContainer}>
                    <details className={css.faqItem}>
                        <summary>Come posso arrivare all'evento?</summary>
                        <p>Puoi raggiungerci in auto parcheggiando gratuitamente nei due parcheggi a disposizione o nei paraggi, oppure utilizzando i mezzi pubblici che fermano vicino al polo scientifico di Borgo Roma (es. linee 21, 22).</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>L'ingresso è a pagamento?</summary>
                        <p>No, l'ingresso è completamente gratuito e libero per tutti, anche per chi non è studente dell'Università di Verona.</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>Ci saranno posti dove mangiare o bere?</summary>
                        <p>Sì, saranno presenti stand gastronomici e punti beverage aperti per tutta la durata dell'evento a partire dalle 19:00.</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>In caso di pioggia l'evento si terrà ugualmente?</summary>
                        <p>In caso di maltempo moderato l'evento potrebbe subire delle variazioni, ti invitiamo a seguire i nostri canali social per aggiornamenti dell'ultimo minuto.</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>Ci saranno dei piatti anche per vegetariani?</summary>
                        <p>Assolutamente si!</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>Accettate pagamenti con carte?</summary>
                        <p>Purtroppo non abbiamo la possibilità di accettare i pagamenti con le carte di credito/debito/prepagate. Vicino all'evento sono disponibili diversi ATM da cui poter prelevare in sicurezza!</p>
                    </details>
                    <details className={css.faqItem}>
                        <summary>Sono disponibili bibite analcoliche?</summary>
                        <p>Certamente</p>
                    </details>
                </div>
            </div>

            <div className={css.section}>
                <h2 className={css.sectionTitle} style={{textAlign: 'center'}}>Il meglio delle edizioni precedenti</h2>
                <div style={{margin: '0 -15%'}}>
                    <PhotosCarousel slides={[2026, 2025, 2024, 2019, 2018, 2017]} />
                </div>
                <div className={css.photosButtonContainer}>
                    <Link href="/photos" className="button-glow">
                        TUTTE LE FOTO
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
