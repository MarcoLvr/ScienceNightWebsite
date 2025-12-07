import Image from "next/image";
import css from "./comingsoon.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div>
            <Header />
            <iframe src={"https://www.iubenda.com/privacy-policy/58817590"} style={{ marginTop: "90px", height: "90vh", width: "100%" }} />

            <Footer />
        </div>
    );
}
