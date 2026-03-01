import css from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Event2026() {
    return (
        <div>
            <Header />
            <div className={css.pageContainer}>
                <div className={css.contentContainer}>
                    <div className={css.titleContainer}>
                        <h1 className={css.mainTitle}>GHE SEMO!</h1>
                        <h2 className={css.subTitle}>Science Night 2026</h2>
                    </div>
                    <div className={css.messageContainer}>
                        <p className={css.message}>
                            Le informazioni sull&apos;edizione 2026 non sono ancora disponibili,
                            ma ci stiamo lavorando. Torna presto per scoprire tutti i dettagli
                            sulla prossima Science Night!
                        </p>
                    </div>
                    <div className={css.buttonContainer}>
                        <Link href="/" className="button-glow">
                            TORNA ALLA HOME
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
