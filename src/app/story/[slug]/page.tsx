import css from "./edition.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

type Section =
    | { type: "intro"; text: string }
    | { type: "text"; text: string }
    | { type: "image-right"; text: string; image: string; imageAlt?: string }
    | { type: "image-left"; text: string; image: string; imageAlt?: string }
    | { type: "cta"; label: string; href: string };

interface Edition {
    year: string;
    title: string;
    banner: string;
    sections: Section[];
}

const editionsData: Record<string, Edition> = {
    "2009": {
        year: "2009",
        title: "La nascita di festascienze",
        banner: "/img/story/wp_2009.webp",
        sections: [
            {
                type: "intro",
                text: "Il 19 giugno 2009 viene organizzata per la prima volta la \"Festa a scienze\". Quell'anno accademico (2008-2009) era stato segnato dal D.L. Gelmini che spinse molti studenti a mobilitarsi a seguito della riforma universitaria. Tra questi anche Wudy, al secolo Walter Riviera, che in quell'anno venne eletto (per la prima volta) come rappresentante della facoltà di Scienze MM.FF.NN. Sin dall'inizio della sua esperienza da rappresentante si trovò a fronteggiare un problema ben noto a molte università italiane: la diffidenza ed il clima freddo dell'ambiente universitario.",
            },
            {
                type: "text",
                text: "Gli studenti sembravano totalmente disinteressati alle attività dei rappresentanti. Molti di loro non sapevano nemmeno dell'esistenza di tale organo.\nSpinto dal suo entusiasmo e dalla consapevolezza che un ambiente universitario più caldo e accogliente avrebbe potuto migliorare la qualità della vita universitaria a 360 gradi, il neo eletto rappresentante si mise subito all'opera per cercare di abbattere il \"muro di ghiaccio\" che divideva rappresentanti e studenti.",
            },
            {
                type: "image-right",
                image: "/img/story/2009/2009_1.webp",
                imageAlt: "Studenti alla prima festa",
                text: "Wudy era convinto che il problema fosse legato a due fattori primari:\n* In primo luogo le scarse opportunità d'interazione che l'università lasciava: essendo infatti dislocata sia dal centro d'Ateneo che dal centro della città, scienze ha sempre sofferto la carenza di locali con una vita universitaria (notturna) attiva.\n* Inoltre mancava il senso di appartenenza all'università stessa: studiare e crescere in quell'ambiente non bastava a sviluppare sufficiente coinvolgimento da parte degli studenti, che di fatto, percepivano l'università come mero luogo di studio.\n\nCon l'obiettivo di iniziare a lavorare su entrambi i fronti, l'attenzione si focalizzò sulla realizzazione di un evento. L'idea era quella di fornire un punto d'arrivo condiviso, qualcosa in cui riconoscersi in qualità di studenti di scienze. Qualcosa che potesse crescere negli anni e consolidarsi affinché gli studenti si potessero sentire utili alla propria università.",
            },
            {
                type: "text",
                text: "L'organizzazione iniziò, un pò per gioco, nell'aprile 2009 quando Wudy in un incontro informale in segreteria di Presidenza, parlò del progetto alla segretaria Chiara Ghini. In quel momento l'idea era semplicemente quella di discutere della fattibilità \"legale\" dell'evento. L'intenzione era infatti quella di organizzare la prima festa un anno dopo, nel giugno 2010. Tuttavia, la ricerca avviata da Chiara in merito alle implicazioni burocratiche, fu così veloce e precisa che diede ancora più animo all'idea e iniziò a far pensare di anticipare i tempi.\n\nBenché la burocrazia pareva mai complicata del previsto, rimanevano da definire aspetti cruciali come le forniture, la pubblicità, la ricerca degli sponsor e la costituzione di uno STAFF. Tutto in poco più di 6 settimane.\n\nCon l'intento di velocizzare la realizzazione, il progetto venne condiviso attraverso incontri studenteschi negli orari extra-didattici al termine delle lezioni. Di 2000 iscritti, solo una ventina partecipava con costanza agli appuntamenti.\nMolti si limitavano ad aiuti pratici di poca responsabilità, ma due in particolare, già compagni di corso del rappresentante, si distinsero per l'interesse e la dedizione: l'amico sardo Lino Faedda, l'amico veronese Paolo -Paolino- Erbizi.",
            },
            {
                type: "image-left",
                image: "/img/story/2009/2009_2.webp",
                imageAlt: "Organizzazione della festa",
                text: "Anche se la bozza del progetto era molto umile, presentava già sei linee guida, chiare e parecchio ambiziose:\n* Prezzi contenuti, La festa avrebbe dovuto accogliere studenti con lo scopo di unire persone, non di fatturare.\n* Musica live, poiché serviva musica che potesse essere apprezzata da più gente possibile e che regalasse la sensazione dei concerti dal vivo.\n* Autonomia, si voleva fare in modo che l'organizzazione e la realizzazione fossero completamente gestite dai soli studenti, incluse le operazioni di amministrazione e recupero fondi.\n* Un evento a scopo benefico: quale miglior modo per accrescere l'utilità e lo stimolo a far bene?\n* Accoglienza a 360°, la serata avrebbe dovuto accogliere il maggior numero di persone, studenti, docenti ed cittadini.\n* Sicurezza, la serata non avrebbe dovuto pesare in nessun modo alla struttura universitaria, pena l'annullamento del progetto negli anni futuri.",
            },
            {
                type: "text",
                text: "Armati di pazienza, buona volontà ed entusiasmo, i tre iniziarono a mettere in moto mani e testa per riuscire a realizzare l'evento entro i termini di tempo fissati. A dare manforte ai loro sforzi, si aggiunse presto un'altra figura (fondamentale per la riuscita della serata), uno studente molto più esperta in materia di \"organizzazione di serate\", Francesco -Chicco- Beltramini.\n\nLa prima realizzazione fu parecchio umile e molto essenziale, ma era nel complesso ben distribuita.\ncit. di Marco Cavagnari:\n\"Grazie a te per aver organizzato la festa. Sappiamo che esisteva già una festa di scienze: 'La sagra della vigna' (da Ca Vignal). La sagra della vigna però, anche se l'ho provata solo un anno, per quanto bella  possa essere non sarà mai calda come quella che hai ideato quest'anno. Come l'ha definita una mia amica 'sa molto da clima di sagra'. Il parcheggio allestito di stand e tavoloni con zona concertino, tutto l'insieme, ospitare nel nostro parcheggio i ragazzi dell'ateneo, ritrovarsi con gli stessi compagni di facoltà all'interno della stessa ma in clima d'allegria; tutto questo riscalda l'ambiente, ci rende più uniti. Peccato per la pioggia, ma se la festa fosse continuata fino a termine, sarebbe stata un'occasione d'oro (poi sta a noi coglierla o meno) per stringere amicizia con i compagni di scienze che conosciamo solamente di vista perché li vediamo studiare (oppure oziare). Un'occasione per entrare a far parte della famiglia scienze, per come la vedo io, costruisce la nostra facoltà...solo che in ambiente/clima quotidiano non lascia tante occasioni (anche perché s'ha altro da fare).\"\n\nCon la speranza di ritrovare lo stesso caldo clima l'anno prossima, alla prossima puntata.",
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2010": {
        year: "2010",
        title: "La festa del riscatto",
        banner: "/img/story/wp_2010.webp",
        sections: [
            {
                type: "intro",
                text: "Cercando di far tesoro dall'esperienza precedente, vennero introdotte alcune modifiche sostanziali nell'intero assetto organizzativo:\n" +
                    "* l'intera macchina partì nel febbraio 2010, ben 4 mesi prima dell'evento;\n" +
                    "* si pensò inoltre di introdurre stand e gazebi che potessero \"salvare\" momentaneamente la cassa, la piastra ed i vari allestimenti in caso di pioggia. ",
            },
            {
                type: "image-right",
                image: "/img/story/2010/2010_1.webp",
                imageAlt: "Festa 2010",
                text: "Quell'anno fu un anno di rinascita vero e proprio. Benchè la festa 2009 si fosse spenta prematuramente, le prime ore di attività erano bastate a far incuriosire gli studenti di scienze. La dimostrazione si ebbe proprio nel 2010 che vide un incremento di partecipazione notevole nello STAFF che passò da circa 20 persone a oltre 70."
            },
            {
                type: "image-left",
                image: "/img/story/2010/2010_2.webp",
                imageAlt: "Festa 2010",
                text: "Dopo gli sforzi di un anno vanificati dal tempo avverso, non fu facile trovare le energie per rimettersi di nuovo in gioco in un impresa simile. Basti pensare alla difficoltà nella ricerca di nuovi sponsor...i risultati disponibili non erano molto incoraggianti per trovare fondi. "
            },
            {
                type: "image-right",
                image: "/img/story/2010/2010_3.webp",
                imageAlt: "Festa 2010",
                text: "Tuttavia l'entusiasmo non mancò, anzi, gli studenti, nuovamente trainati dal solito trio Walter -Wudy- Riviera, Lino Faedda e Paolo -Paolino- Erbizi tornarono ancora più carichi e decisi. "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2011": {
        year: "2011",
        title: "Shosholoza",
        banner: "/img/story/wp_2011.webp",
        sections: [
            {
                type: "intro",
                text: "L'edizione 2010 era andata bene per quanto riguarda l'aspetto organizzativo, ma rimanevano ancora alcune cose da migliorare. Aspetti sostanziali, come quelli economici.",
            },
            {
                type: "image-right",
                image: "/img/story/2011/2011_1.webp",
                imageAlt: "Festa 2011",
                text: `Era necessario rivedere alcune forniture e servizi: se da un lato si era riusciti a terminare la festa senza troppi problemi, il 2010 non aveva lasciato molto spazio alla beneficenza, solo 330€ devoluti. Fondi che erano stati raccolti dallo staff a fine servizio, perchè la serata aveva coperto al centesimo i costi d'allestimento. Notizia davvero poco incoraggiante se si pensa che dopo tutti quegli sforzi non era rimasto molto. Il punto verteva nuovamente sul coinvolgere sempre più persone e per farlo bisognava rendere ancora più accogliente l'ambiente in serata. 
                A dare man forte ai propri sforzi, sull'onda dell'anno precedente, venne scelto un motto che potesse incoraggiare gli studenti a non arrendersi ai risultati ottenuti ma a proseguire sempre imparando dai propri errori: SHOSHOLOZA, una parola sudafricana che significa "andare avanti".`
            },
            {
                type: "image-left",
                image: "/img/story/2011/2011_2.webp",
                imageAlt: "Festa 2011",
                text: "Il risultato di quell'edizione fu molto incoraggiante. L'idea iniziale che aveva alimentato la festa, l'idea della costruzione di un ambiente universitario più caldo, accogliente e ospitale iniziava a farsi sentire. La dimostrazione non arrivò solo dall'ulteriore crescita in numero dei componenti dello STAFF, ma anche dall'input che l'allora preside di facoltà, Prof. Roberto Giacobazzi, fornì contattando la stampa universitaria per dare rilievo all'evento. "
            },
            {
                type: "image-right",
                image: "/img/story/2011/2011_3.webp",
                imageAlt: "Festa 2011",
                text: "Intervista del Prof. Giacobazzi: Ormai sono 3 anni che si svolge a Scienze la festa di fine anno - spiega il preside Roberto Giacobazzi - È una delle più belle iniziative di aggregazione di studenti voluta, organizzata e gestita perfettamente da loro in totale autonomia, a cui la facoltà ha contribuito con una spesa minima di 75 euro. La festa di scienze sta crescendo ed in tre anni è diventata un appuntamento ormai irrinunciabile, che aggrega studenti, docenti, amici, ed abitanti del quartiere di Borgo Roma. Penso che fare università sia non solo offrire ricerca e didattica di alta qualità, ma anche saper dare un'identità attorno alla quale aggregare i ragazzi per creare una vera comunità universitaria, che sappia crescere anche divertendosi. Sono gli anni più belli e non vanno sprecati!\". A dimostrazione di ciò, durante la serata venne calato da uno dei due palazzi CaVignal, uno striscione di 10 x 4 mt con riportato quello che poi divenne il motto di quell'edizione: \"Rise and Rise again until lambs become lions\". "
            },
            {
                type: "text",
                text: "Si ringraziano Lara Montresor, Fabio Marco Caputo e Federico Borin, per la collaborazione nella creazione dello striscione. Altro avvenimento importantissimo di quell'anno fu la nascita di quella che poi è diventò la Mascotte dell'università: SHOSHOLORSO, l'orsacchiotto di peluches che da 4 anni saluta gli studenti che passano davanti all'ufficio rappresentanti. "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2012": {
        year: "2012",
        title: "Ho'oponopono",
        banner: "/img/story/wp_2012.webp",
        sections: [
            {
                type: "intro",
                text: "Il 2012 fu un anno molto importante per la Festa di Scienze. All'inizio, in fase di organizzazione, si doveva tenere conto dei problemi degli anni scorsi.",
            },
            {
                type: "image-right",
                image: "/img/story/2012/2012_1.webp",
                imageAlt: "Festa 2012",
                text: "Poichè anche il 2011 non aveva fruttato moltissimo alla beneficenza, la paura che l'inefficacia risiedesse nell'assetto adottato fino ad allora si faceva sempre più pressante. Il timore era quello d'esser riusciti a creare un evento che però, negli anni, non avrebbe saputo essere autosufficiente. L'idea originaria di Wudy aveva tra i capisaldi quello di rimanere un evento indipendente, per il quale servissero solo tanta buona volontà ed entusiasmo. Una serata senza intoppi, che però produceva poca beneficenza lasciando ben poco margine di errore. In realtà le speranze non erano del tutto crollate. Il 2011 aveva lasciato un bellissimo ricordo ma non si può dire fosse stata una festa \"esente da intoppi\", anzi. A metà serata lo stand delle birre si bloccò a seguito di un guasto all'impianto di spillatura. Guasto che provocò non pochi disguidi.\nRimaneva quindi un ultimo fattore da \"correggere\" prima di poter valutare il vero potenziale dell'evento. Per ridurre al minimo la possibilità di guasti, non solo vennero raddoppiati gli impianti di spillatura, ma vennero anche potenziati per evitare cedimenti nei momenti clu. Fu proprio da questo aspetto che emerse l'ispirazione per il nuovo motto: \"Ho'oponopono\", una parola Hawaiana che significa \"mettere le cose al posto giusto\", in altre parole \"aggiustare le cose\". "
            },
            {
              type: "text",
              text: "L'altro fattore, più storico che tecnico, che contribuì a rendere quell'anno memorabile fu l'ultimo decreto Gelmini che segnava la fine delle facoltà e la nascita dei Dipartimenti. In quell'anno, più che mai, serviva sviluppare un senso d'appartenenza ed un gioco di squadra che potesse persistere anche negli anni successivi, quando la cara ed amata Facoltà di Scienze MM.FF.NN si sarebbe divisa nei due dipartimenti: Biotecnologie e Informatica.\n Consapevole della sua imminente laurea, Wudy (al secolo Walter Riviera) pensò che sarebbe stato opportuno iniziare a pensare ad un passaggio di testimone per quanto riguarda l'organizzazione dell'evento. Con l'obiettivo di permettere sempre a più persone di poter dare il contributo alla festa, decise di istituire un secondo STAFF oltre a quello \"esecutivo\" che prestava servizio in serata: lo STAFF \"organizzativo\"."
            },
            {
                type: "image-left",
                image: "/img/story/2012/2012_2.webp",
                imageAlt: "Festa 2012",
                text: "\n Per alleggerire il carico e massimizzare i risultati, lo STAFF \"organizzativo\" venne strutturato in 4 commissioni: la comm. grafica, la comm. forniture e servizi, la comm. ricerca sponsor e la comm. burocrazia. Ognuna di esse era formata da studenti volontari, trainati da altri studenti più esperti con la nomina di responsabili. Questa scelta portò alla creazione di un'altra attività: la scelta delle locandine! Avendo a disposizione una commissione dedicata (quella grafica), vennero prodotti più prototipi di locandine, e ad ogni studente venne data la possibilità di esprimere la propria preferenza attraverso un voto on-line tramite piattaforma E-Learning.\n" +
                    "\n" +
                    "Un'ulteriore iniziativa fu quella di introdurre una parte di \"intrattenimento\" durante la serata, appena prima dell'inizio del concerto. Si creò così la SFILATA a mò di \"ciao Darwin\", con i vari scenari che ritraevano gli iscritti ai corsi erogati da Scienze MM.FF.NN, tutto ovviamente in chiave ironica.\n" +
                    "La serata fu alquanto indimenticabile! Malgrado qualche piccolo attimo di paura dovuto ad un \"momentaneo\" stand-by di uno dei due impianti di spillatura, tutto proseguì liscio. Finalmente i risultati sperati arrivarono come una ventata d'aria fresca d'estate: erano riusciti a devolvere una quota \"considerevole\" in beneficienza, pur lasciando invariato l'assetto economico dei servizi forniti!"
            },
            {
                type: "text",
                text: "A conferma del successo a 360°, il preside (per l'ultimo anno!) Prof. Roberto Giacobazzi, tornò accompagnato da un articolo sull'UniVr Magazine:\n" +
                    "\"La festa di fine anno della Facoltà di Scienze è diventato un appuntamento molto atteso dagli studenti, e non solo. La festa è interamente pensata e realizzata dagli studenti, e questo è forse l'aspetto più bello di questa idea: per una notte sono gli studenti che gestiscono gli spazi dell'università. Non è un caso che i ricordi più belli degli anni universitari siano proprio quelli legati alla condivisione degli spazi, per lo studio ma anche per il divertimento e per lo stare insieme. Tutto sommato ci vuole poco per fare un campus, basta uno spazio e la voglia di farlo vivere insieme\". "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2013": {
        year: "2013",
        title: "The show must go on",
        banner: "/img/story/wp_2013.webp",
        sections: [
            {
                type: "intro",
                text: "Benchè dopo 5 anni di esperienza molte dinamiche \"organizzative\" fossero ben collaudate, la sfida maggiore del 2013 risiedeva nel \"passaggio di testimone\" a livello organizzativo in vista della vicina laurea di Wudy (al secolo Walter Riviera), \"padre fondatore\" dell'evento",
            },
            {
                type: "image-right",
                image: "/img/story/2013/2013_1.webp",
                imageAlt: "Festa 2013",
                text: "Per certi versi si sarebbe potuto scegliere di mantenere le cose invariate rispetto agli anni precedenti, fino a laurea conseguita, ma l'idea era quella di sfruttare il 2013 come anno di collaudo per lo staff organizzativo che avrebbe poi proseguito l'attività nel 2014. Rimanendo quindi coerenti con la scelta del 2012, lo staff organizzativo acquisì maggiori responsabilità sia in termini di incarichi che di decisioni. Tra le nuove \"locomotive\" delle varie commissioni ricordiamo: Alessandra Fin, Alex Malfatti, Lara Montresor e gli immancabili Lino Faedda e Paolo -Paolino- Erbizi. "
            },
            {
                type: "image-left",
                image: "/img/story/2013/2013_2.webp",
                imageAlt: "Festa 2013",
                text: "Come tutti i gruppi che si rispettino, anche in quell'occasione non mancarono attimi di attrito o sconforto. Attimi che una volta lasciati decantare, non ebbero conseguenze spiacevoli sulla realizzazione finale, anzi. La festa riuscì dal punto di vista pratico, confermando le aspettative iniziali dello STAFF organizzativo che si dimostrò \"pronto\" per l'incarico dell'anno seguente ed iniziò a mostrare i molteplici vantaggi dell'avere distribuito l'organizzazione a più persone. Lo stand della birra venne infatti ridimensionato piazzando due gazebi anzichè uno, collegati da un ulteriore banco per il servizio. Venne creata una nuova figura organizzativa: il \"capo-cantiere\", ruolo che doveva coordinare le attività di allestimento e smantellamento del parcheggio, sapientemente interpretato allora da Marco Canteri.\n" +
                    "\n" +
                    "Per quanto riguarda l'intrattenimento col pubblico, visto il successo e l'apprezzamento della sfilata del 2011, venne proposta un iniziativa nuova: le premiazioni del concorso \"MISS e MISTER SCIENZE\". Concorso iniziato qualche mese prima all'interno dei dipartimenti, nato da un idea di Beatrice Mortoni affiancata nella realizzazione da Mattia Paoli e Lino Faedda. "
            },
            {
                type: "image-right",
                image: "/img/story/2013/2013_3.webp",
                imageAlt: "Festa 2013",
                text: "Per molti, la maggior parte probabilmente, la festa filò liscia tra i brindisi e le risate come ogni altro anno, ma per alcuni studenti dello STAFF quella festa rappresentò un cocktail di emozioni incredibili, un mix tra felicità e soddisfazione per l'ennessima conferma di un evento ben riuscito accompagnate da un retrogusto di malinconia per la fine del \"capitolo-Wudy\".\n" +
                    "Questa sensazione iniziò a farsi sentire qualche mese prima rispetto alla festa...e fu proprio questo aspetto a decretare il motto di quell'anno:\"The show must go on!\". Lo stesso messaggio venne poi racchiuso nel logo delle maglie STAFF: una fiamma che potesse continuare ad ardere con la stessa intensità e passione con cui era stato \"acceso\" un ambiente universitario più caloroso ed accogliente negli ultimi anni. "
            },
            {
                type: "text",
                text: "Le emozioni di quel periodo furono il vero tratto distintivo dell'edizione 2013. Emozioni che emersero nella loro sfumatura più positiva in due momenti durante la serata: la consegna delle maglie STAFF celebrative nere-oro ai ragazzi del gruppo organizztivo, maglie che ritraevano la stessa fiamma circondata da tante stelle quante erano le passate edizioni della festa, con sulle spalle la scritta \"When a little people become a STAFF\" e la consegna ai fedelissimi Lino e Paolino, di due riconoscimenti ufficiali firmati dai Direttori dei Dipartimenti (Biotecnologie ed Informatica) che elogiavano il loro impegno e la dedizione all'attività di Rappresentanza.\n" +
                    "Istanti che, di fatto, segnarono il vero e proprio \"passaggio di testimone\" nell'organizzazione della Festa. "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2014": {
        year: "2014",
        title: "Don't stop believin",
        banner: "/img/story/wp_2014.webp",
        sections: [
            {
                type: "intro",
                text: "Il 2014 è stato l'anno di un importante cambiamento per la Festa di Scienze: il suo ideatore e fondatore, dopo essersi laureato, ha passato le redini dell'organizzazione al consolidato ed affiatato gruppo composto da Lino, Paolino, Ale Ago, Diego, Malfa e Ale Fin (I Magnifici Sei). ",
            },
            {
                type: "image-right",
                image: "/img/story/2014/2014_1.webp",
                imageAlt: "Festa 2014",
                text: "Già la festa del 2013 aveva avuto un successo straordinario sotto tutti i punti di vista (incasso, beneficienza, soddisfazioni personali), di conseguenza le aspettative per il 2014 risultavano essere numerose e l'obiettivo che prefisso era quello di dimostrare di essere all'altezza della grande responsabilità affidata al gruppo." +
                    "Le idee rimasero le stesse degli anni precedenti, ponendo come aspirazione principale l'idea di continuare a credere in un ambiente universitario sempre aperto, accogliente ed ospitale. Per questo motivo è stato scelto il motto \" Don't Stop Believin' \" associato al logo creato per le maglie raffigurante una catena, simbolo della voglia di rimanere uniti, e di continuare a mantenere il benessere e il clima raggiunti finora.\n" +
                    "Allo staff organizzativo vennero aggiunte la commissione Pubblicità e la commissione Sito web, grazie alla quale nel 2014 è nato il sito web ufficiale della Festa di Scienze. Le iscrizioni allo staff ebbero un successo eccezionale: 22 furono i componenti nell'organizzativo e 96 nell'esecutivo. Le vendite delle pre-consumazioni superarono del doppio i numeri dell'anno precedente, aumentando così le aspettative pre-festa. "
            },
            {
                type: "image-left",
                image: "/img/story/2014/2014_2.webp",
                imageAlt: "Festa 2014",
                text: "Tra le ulteriori novità per la serata della festa si possono ricordare:\n" +
                    "- la nuova AREA RICERCA, situata nella zona del \"Computer Science Park\", dove gli ospiti potevano seguire un percorso allestito con esposizioni di progetti di ricerca del Dipartimento di Informatica e del Dipartimento di Biotecnologie;\n" +
                    "- l'introduzione dell'angolo foto, che si è rivelato essere una perfetta attrazione, riscuotendo un enorme successo;\n" +
                    "- il concorso Scielfie, indetto nel mese di Maggio, a cui ogni studente di Scienze poteva partecipare con un selfie. Nel corso della serata vennero premiati i selfie più belli ed originali.\n"
            },
            {
                type: "text",
                "text": "L'evento fu pubblicizzato dalla radio Universitaria con un intervista fatta ad uno degli organizzatori e dal magazine dell'Università.\n" +
                    "La festa si svolse nel migliore dei modi e dopo aver chiuso i cancelli, il 6 giugno 2014 diventò un giorno da non poter dimenticare! Il ricavato devoluto in beneficienza fu il doppio del 2013 e il ricordo di quella serata rimase impresso nella mente di tutti coloro che resero magica la festa di Scienze 2014. "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2015": {
        year: "2015",
        title: "Let's be ohana",
        banner: "/img/story/wp_2015.webp",
        sections: [
            {
                type: "intro",
                text: "Il 2015 è stato l'anno del consolidamento e del tentato passaggio di testimone. L'organizzazione, affidata sempre al gruppo collaudato dei Magnifici 6 (Lino, Paolino, Ale Ago, Malfa, Ale Fin e Diego), è stata impeccabile sotto tutti i punti di vista. L'organigramma dello staff organizzativo è rimasto uguale a quello del 2014, però con l'obbiettivo di aggiungere per ogni gruppo almeno una nuova leva \"promettente per le future feste\".",
            },
            {
                type: "image-right",
                image: "/img/story/2015/2015_1.webp",
                imageAlt: "Festa 2015",
                text: "Il motto \"Let's be Ohana\", che ha contraddistinto lo staff del 2015, è stato ideato e pensato per esprimere il desiderio di unire gli studenti dello Staff in un'unica grande famiglia e creare un ambiente dove sono le persone e non i ruoli a fare la differenza.\n" +
                    "Assieme al motto lo staff organizzativo ha scelto all'unanimità anche il logo delle maglie STAFF:\n" +
                    "il Cubo di Rubik!!\n" +
                    "Il cubo raffigurava per ogni quadratino il colore della maglia degli anni scorsi dove guarda caso il numero di facce (6) era lo stesso del numero di feste passate. Il significato profondo è proprio quello del gioco che viene vinto solo se ogni quadratino (quindi ogni componente dello staff) va al suo posto (dà il suo contributo) per completare ogni lato di uno stesso colore (agendo proprio per lo scopo della nostra famiglia: vincere uniti!). A tutto lo staff è piaciuto perché aveva anche un senso maledettamente nerd! "
            },
            {
                type: "text",
                text: "Si sono tenute delle formule vincenti e attrattive come l'angolo foto e l'area ricerca nel ''Computer Science Park\", che ha riscosso ancor più successo rispetto al 2014. In tale zona era presente un itinerario a cielo aperto in cui ogni partecipante assisteva alle esposizioni dei progetti di ricerca appartenenti al Dipartimento di Informatica e al Dipartimento di Biotecnologie.\n" +
                    "L'evento è stato pubblicizzato dalla radio Universitaria con un'intervista fatta a Lino Faedda, uno degli organizzatori, e dal magazine dell'Università. "
            },
            {
                type: "image-left",
                image: "/img/story/2015/2015_2.webp",
                imageAlt: "Festa 2015",
                text: "In futuro si potranno ricordare i record guardando un po' i numeri raggiunti nel 2015, tra tutti il ricavato devoluto in beneficenza che è aumentato rispetto al 2014, le card delle preconsumazioni vendute, più di 300 studenti che hanno votato la locandina (con un tema nerd) della festa e lo staff formato da 110 studenti!\n" +
                    "La festa del 2015 ha segnato una svolta perché è stata l'ultima in veste di organizzatori per i \"Magnifici 6\", tutti prossimi alla laurea, che hanno lasciato le redini dell'organizzazione di una festa che ormai ha catturato il cuore di tutti, soprattutto quello degli studenti dello Staff e dell'area di Scienze e Ingegneria.\n" +
                    "Il parcheggio nella sera del 5 giugno 2015 è stato avvolto da un'atmosfera incantevole che ha unito tutti e che i \"Magnifici 6\" sperano di ritrovare nell'eventuale festa del 2016. "
            },
            {
                type: "text",
                text: "We don't stop believin...so let's be ohana!\n" +
                    "This is not the end just the beginning of a new era...because Noi Siamo Scienze! "
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2016": {
        year: "2016",
        title: "Memento audere semper",
        banner: "/img/story/wp_2016.webp",
        sections: [
            {
                type: "intro",
                text: "Nel 2016 la festa si è svolta in un clima di grande incertezza. Dopo 6 anni di organizzazione, i \"Magnifici 6\" (Lino, Paolino, Ale Ago, Malfa, Ale Fin e Diego) hanno lasciato le redini dell'organizzazione a un gruppo di studenti che non aveva mai fatto parte dello staff organizzativo prima d'ora. Il passaggio di testimone è stato molto difficile e ha portato a una serie di problemi organizzativi che hanno messo a dura prova la realizzazione della festa. Nonostante tutto, il gruppo organizzativo ha deciso di andare avanti con l'organizzazione della festa, anche se con molte difficoltà e incertezze. Il motto scelto per quell'anno è stato \"Memento audere semper\", che significa \"Ricorda di osare sempre\". Questo motto è stato scelto per incoraggiare il gruppo organizzativo a non arrendersi di fronte alle difficoltà e a continuare a credere nella realizzazione della festa, nonostante le avversità. Non sono state rilasciate parole ufficiali dall'organizzazione di quell'anno.",
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2017": {
        year: "2017",
        title: "Festascienze is us",
        banner: "/img/story/wp_2017.webp",
        sections: [
            {
                type: "intro",
                text: "Non si anno notizie o parole ufficiali su come la festa del 2017 sia stata organizzata, ma una cosa è certa: qualcosa non quadrava. È stata scritta la seguente lettera dalla vecchia amministrazione, che lascia intendere che ci siano stati problemi organizzativi e che la festa sia stata a rischio annullamento fino all'ultimo minuto. La lettera è stata scritta da Walter Riviera, fondatore della festa, e sembra essere un appello agli studenti dello staff per non arrendersi di fronte alle difficoltà e per continuare a credere nella realizzazione della festa, nonostante le avversità.",
            },
            {
                type: "text",
                text: "Non so cosa dirvi davvero.\n" +
                    "Cinque minuti alla vostra più difficile sfida organizzativa. Tutto si decide oggi.\n" +
                    "\n" +
                    "Ora voi o risorgete come squadra o cederete un centimetro alla volta, uno stand dopo l'altro fino alla disfatta.\n" +
                    "Siete all'inferno adesso signori miei, credetemi... e potete rimanerci, farvi umiliare.\n" +
                    "Oppure aprirvi la strada ed essere ricordati per sempre, potete scalare le pareti della festa un centimetro alla volta.\n" +
                    "\n" +
                    "Io però non posso farlo per voi, il mio tempo è già passato.\n" +
                    "\n" +
                    "Mi guardo intorno, vedo i vostri giovani volti e penso: \"Certo che se potessi tornare indietro quante cose vorrei rifare per questa festa\".\n" +
                    "\n" +
                    "Si, perché io, che ci crediate o no, ho passato notti insonni per questa festa, ho trascurato molte persone per questa festa, e l'ultimo anno ho trascurato anche l'università per questa festa.\n" +
                    "\n" +
                    "Sapete, col tempo e con l'età tante cose ci vengono tolte, ma questo fa parte della vita, ma tu lo impari solo quando quelle cose le cominci a perdere, e scopri che la vita è un gioco di centimetri, e così è la festa.\n" +
                    "\n" +
                    "Perché in entrambi questi giochi, il margine di errore è ridottissimo. Capitelo, mezzo permesso consegnato un po' in anticipo o un po' in ritardo e voi non ce la fate. Mezzo problema detto troppo presto o troppo tardi e mancate l'obbiettivo, ma i centimetri che vi servono, sono intorno a voi.\n" +
                    "\n" +
                    "In questo staff si combatte per un centimetro.\n" +
                    "In questo staff massacrate voi stessi e quelli intorno a voi per un centimetro.\n" +
                    "Vi difendete con le unghie e con i denti per un centimetro.\n" +
                    "\n" +
                    "Perché sapete che quando andremo a sommare tutti quei centimetri, il totale farà la differenza tra la vittoria e la sconfitta, e voglio dirvi una cosa: in ogni scontro è colui il quale è disposto a morire che guadagnerà un centimetro.\n" +
                    "Io so che se potrò avere un'esistenza appagante saraà perché sono disposto a battermi, e a morire per quel centimetro.\n" +
                    "\n" +
                    "In questo consiste lo staff: in quel logo che avete stampato sulle magliette, ma io non posso obbligarvi a lottare.\n" +
                    "Guardate chi avete accanto e scommetto che ci vedrete una persona determinata, che si sacrificherà volentieri per questa squadra, consapevole del fatto che quando sarà il momento, voi farete lo stesso per lui.\n" +
                    "\n" +
                    "Perciò, o noi risorgiamo adesso, come collettivo o saremo annientati individualmente.\n" +
                    "E' la festa... è tutto qui."
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2024": {
        year: "2024",
        title: "Turn on the research",
        banner: "/img/story/wp_2024.webp",
        sections: [
            {
                type: "intro",
                text: "La pagina è ancora in costruzione!",
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
    "2025": {
        year: "2025",
        title: "Science Night",
        banner: "/img/story/wp_2025.webp",
        sections: [
            {
                type: "intro",
                text: "La pagina è ancora in costruzione!",
            },
            {
                type: "cta",
                label: "TUTTA LA STORIA",
                href: "/story",
            },
        ],
    },
};

export default async function EditionPage({ params }: { params: Promise<{ slug: string }> }) {

    // 1. Attendi che i params siano risolti
    const { slug } = await params;

    console.log("SLUG " + slug);
    const edition = editionsData[slug];

    if (!edition) {
        return (
            <div>
                <Header />
                <div className={css.notFound}>
                    <h1>Edizione non trovata</h1>
                    <Link href={"/story"} className="button-glow">Torna alla storia</Link>
                </div><Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div>
                <div className={css.bannerContainer}>
                    <div className={css.bannerOverlay}>
                        <h1 className={css.bannerTitle}>Science Night</h1>
                        <h2 className={css.bannerSubtitle}>Our story</h2>
                    </div>
                    <Image
                        className={css.bannerImage}
                        src={edition.banner}
                        alt={`Banner ${edition.year}`}
                        fill
                        unoptimized
                        priority
                    />
                </div>

                <div className={css.pageContent}>
                    {edition.sections.map((section, i) => {
                        if (section.type === "intro") {
                            return (
                                <section key={i} className={css.introSection}>
                                    <span className={css.introYear}>{edition.year}</span>
                                    <h2 className={css.introTitle}>{edition.title}</h2>
                                    <p className={css.introText}>{section.text}</p>
                                </section>
                            );
                        }
                        if (section.type === "text") {
                            return (
                                <section key={i} className={css.textSection}>
                                    {section.text.split("\n").map((line, j) => (
                                        <p key={j} className={css.textParagraph}>{line}</p>
                                    ))}
                                </section>
                            );
                        }
                        if (section.type === "image-right") {
                            return (
                                <section key={i} className={css.imageSection}>
                                    <div className={css.imageSectionText}>
                                        {section.text.split("\n").map((line, j) => (
                                            <p key={j} className={css.textParagraph}>{line}</p>
                                        ))}
                                    </div>
                                    <div className={css.imageSectionImg}>
                                        <div className={css.imageWrapper}>
                                            <img src={section.image} alt={section.imageAlt ?? ""} className={css.sectionImg} />
                                        </div>
                                    </div>
                                </section>
                            );
                        }
                        if (section.type === "image-left") {
                            return (
                                <section key={i} className={`${css.imageSection} ${css.imageSectionReversed}`}>
                                    <div className={css.imageSectionImg}>
                                        <div className={css.imageWrapper}>
                                            <img src={section.image} alt={section.imageAlt ?? ""} className={css.sectionImg} />
                                        </div>
                                    </div>
                                    <div className={css.imageSectionText}>
                                        {section.text.split("\n").map((line, j) => (
                                            <p key={j} className={css.textParagraph}>{line}</p>
                                        ))}
                                    </div>
                                </section>
                            );
                        }
                        if (section.type === "cta") {
                            return (
                                <section key={i} className={css.ctaSection}>
                                    <a href={section.href} className="button-glow">{section.label}</a>
                                </section>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return Object.keys(editionsData).map((slug) => ({ slug }));
}
