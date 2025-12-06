import Image from "next/image";
import css from "./comingsoon.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
                    <a href="/" className="button-glow">
                        TORNA ALLA HOME
                        <img src={"/img/btn.svg"} alt={""}/>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}
