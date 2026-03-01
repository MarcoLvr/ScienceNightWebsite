import Image from "next/image";
import css from "./comingsoon.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Header />
            <div className={css.comingSoon}>
                <div>
                    <h1>Ciao!</h1>
                    <h3>Grazie per il tuo interesse nello scoprire di più riguardo a Science Night!</h3>
                    <p>Stiamo lavorando giorno e notte per offrirvi la migliore esperienza possibile, ma questo
                        richiederà ancora un po' di tempo. Torna a trovarci più avanti per vedere questa pagina!</p>
                </div>
                <div>
                    <Link href="/" className="button-glow">
                        TORNA ALLA HOME
                        <img src={"/img/btn.svg"} alt={""}/>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
