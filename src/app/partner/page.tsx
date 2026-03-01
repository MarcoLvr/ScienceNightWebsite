import Image from "next/image";
import css from "./partner.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const stats = [
    { number: "16+", label: "Edizioni organizzate" },
    { number: "1500+", label: "Visitatori a edizione" },
    { number: "24.000+", label: "Euro donati in beneficienza" },
    { number: "15+", label: "Anni di storia" },
];

const benefits = [
    {
        title: "Visibilità garantita",
        text: "Il tuo brand raggiunge centinaia di studenti universitari e docenti durante la serata e nelle settimane di promozione sui canali social.",
    },
    {
        title: "Pubblico giovane e qualificato",
        text: "Studenti dei dipartimenti di Scienze e Ingegneria dell'Università di Verona: un target giovane, istruito e con alta propensione alla fedeltà al brand.",
    },
    {
        title: "Promozione multicanale",
        text: "Logo sulle locandine, sito web, social media e comunicazioni ufficiali dell'evento. Affissione dello striscione del brand. Annuncio all'inizio e termine della serata. Opportunità di allestire uno stand promozionale durante l'evento.",
    },
    {
        title: "Ritorno continuo",
        text: "Molti dei nostri partner ci supportano da anni. Un investimento che cresce nel tempo con la reputazione e la storia dell'evento.",
    },
    {
        title: "Legame con l'università",
        text: "Associare il proprio nome a un evento studentesco ufficiale rafforza il posizionamento nel territorio veronese e nel mondo accademico.",
    },{
        title: "Evento no-profit",
        text: "La festa ha spesso avuto una componente benefica. Supportarla significa anche sostenere cause sociali, un valore aggiunto per l'immagine del brand.",
    },
];

const partners = [
    {
        name: "Benetti",
        years: "Partner storico",
        desc: "Uno dei partner più longevi della festa, presente fin dalle prime edizioni con forniture e supporto logistico.",
        url: "https://benetti.store/",
    },
    {
        name: "Cantina Valpantena",
        years: "Partner storico",
        desc: "Eccellenza vinicola veronese che ha accompagnato le serate di Science Night con i propri prodotti.",
        url: "https://www.cantinediverona.it/it/cantine/cantina-valpantena",
    },
    {
        name: "La Bottega",
        years: "Partner storico",
        desc: "Realtà locale che ha creduto nel progetto fin dall'inizio, contribuendo alla riuscita di numerose edizioni.",
        url: "https://www.facebook.com/labottegadibassomarco",
    },
];

export default function PartnerPage() {
    return (
        <div>
            <Header />
            <div>
                <div className={css.bannerContainer}>
                    <div className={css.bannerOverlay}>
                        <h1 className={css.bannerTitle}>Science Night</h1>
                        <p className={css.bannerSubtitle}>
                            Investi in un evento che da oltre 15 anni anima l&apos;università di Verona
                        </p>
                    </div>
                    <Image
                        className={css.bannerImage}
                        src="/img/partner/banner.webp"
                        alt="Partner banner"
                        fill
                        unoptimized
                        priority
                    />
                </div>

                <section className={css.statsSection}>
                    <span className={css.sectionLabel}>L&apos;evento in numeri</span>
                    <h2 className={css.sectionTitle}>Un evento che punta alla crescita</h2>
                    <p className={css.sectionText}>
                        Science Night è la festa di fine anno accademico dei dipartimenti di Scienze e Ingegneria
                        dell&apos;Università di Verona. Organizzata interamente dagli studenti, è diventata un punto
                        di riferimento per l&apos;intera comunità universitaria e non solo.
                    </p>
                    <div className={css.statsGrid}>
                        {stats.map((stat) => (
                            <div key={stat.label} className={css.statCard}>
                                <span className={css.statNumber}>{stat.number}</span>
                                <span className={css.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={css.imageSection}>
                    <div className={css.imageSectionText}>
                        <span className={css.sectionLabel}>La festa</span>
                        <h3 className={css.imageSectionTitle}>Un&apos;esperienza che resta</h3>
                        <p className={css.textParagraph}>
                            Ogni edizione di Science Night è un evento unico: musica, stand gastronomici,
                            attività e migliaia di persone che si ritrovano nel parcheggio dell&apos;università.
                            Il tuo brand entra in questo contesto e diventa parte del ricordo.
                        </p>
                        <p className={css.textParagraph}>
                            Non si tratta solo di un logo su una locandina. Significa stare accanto
                            agli studenti nel momento più celebrativo del loro anno accademico e contribuire ai loro festeggiamenti. Un legame emotivo che potrebbe tradursi in fedeltà e riconoscimento del brand.
                        </p>
                    </div>
                    <div className={css.imageSectionImg}>
                        <div className={css.imageWrapper}>
                            <Image fill src="/img/partner/festa.webp" alt="La festa" className={css.sectionImg} unoptimized />
                        </div>
                    </div>
                </section>

                <section className={css.whySection}>
                    <span className={css.sectionLabel}>Perché sponsorizzarci</span>
                    <h2 className={css.sectionTitle}>Un investimento solido</h2>
                    <p className={css.sectionText}>
                        Sponsorizzare Science Night significa entrare a far parte di una storia lunga oltre 15 anni,
                        fatta di passione, studenti e comunità.
                    </p>
                    <div className={css.benefitsGrid}>
                        {benefits.map((b, i) => (
                            <div key={b.title} className={css.benefitCard}>
                                <span className={css.benefitNumber}>0{i + 1}</span>
                                <h3 className={css.benefitTitle}>{b.title}</h3>
                                <p className={css.benefitText}>{b.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`${css.imageSection} ${css.imageSectionReversed}`}>
                    <div className={css.imageSectionImg}>
                        <div className={css.imageWrapper}>
                            <Image fill src="/img/partner/pubblico.webp" alt="Il pubblico" className={css.sectionImg} unoptimized />
                        </div>
                    </div>
                    <div className={css.imageSectionText}>
                        <span className={css.sectionLabel}>Il pubblico</span>
                        <h3 className={css.imageSectionTitle}>Chi viene a Science Night</h3>
                        <p className={css.textParagraph}>
                            Studenti universitari, dottorandi, docenti, famiglie e amici: il pubblico di Science Night
                            è trasversale ma ha un nucleo solido di giovani adulti tra i 20 e i 30 anni,
                            con alta istruzione e forte identità locale.
                        </p>
                        <p className={css.textParagraph}>
                            Un target difficile da raggiungere con la pubblicità tradizionale, ma fidelizzabile
                            attraverso un&apos;associazione autentica con un evento che amano.
                        </p>
                    </div>
                </section>

                <section className={css.partnersSection}>
                    <span className={css.sectionLabel}>Chi ci ha già scelto</span>
                    <h2 className={css.sectionTitle}>I nostri partner storici</h2>
                    <p className={css.sectionText}>
                        Alcune realtà hanno creduto in noi fin dall&apos;inizio e continuano a farlo ancora oggi.
                        La loro fedeltà è la migliore testimonianza del valore di questo evento.
                    </p>
                    <div className={css.partnersGrid}>
                        {partners.map((p) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.partnerCard}
                            >
                                <h3 className={css.partnerName}>{p.name}</h3>
                                <span className={css.partnerYears}>{p.years}</span>
                                <p className={css.partnerDesc}>{p.desc}</p>
                            </a>
                        ))}

                    </div>
                </section>

                <section className={css.ctaSection}>
                    <h2 className={css.ctaTitle}>Vuoi entrare a far parte della storia?</h2>
                    <p className={css.ctaText}>
                        Scrivici per ricevere il nostro dossier sponsor con tutte le opportunità disponibili,
                        i pacchetti di visibilità e i dettagli sull&apos;edizione in corso. Saremo disponibili anche a fissare un incontro faccia a faccia per discutere della proposta e personalizzarla in base alle esigenze.
                    </p>
                    <a href="mailto:sales@sciencenight.it" className={css.ctaEmail}>
                        sales@sciencenight.it
                    </a>
                    <a href="mailto:sales@sciencenight.it" className="button-glow" style={{ marginTop: "1rem" }}>
                        Contattaci ora
                    </a>
                </section>
            </div>
            <Footer />
        </div>
    );
}
