import React from "react";

import AboutUsBg from '../assets/img/about-us-hero-bg.png'

function AboutUs() {
    return (
        <section className="bg-[#f5f5f5] py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* HERO IMAGE */}
                <div className="relative rounded-xl overflow-hidden">
                    <img
                        src={AboutUsBg}
                        alt="Om oss"
                        className="w-full h-[400px] object-cover"
                    />
                    {/* Overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#2f4a6d] text-white px-16 py-6 rounded-xl text-2xl tracking-widest font-semibold shadow-lg">
                            OM OSS
                        </div>
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="mt-12 text-[#333] text-left">
                    <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
                        VI ER STJØRDAL KVINNE OG FAMILIELAG!
                    </h2>

                    <div className="space-y-10 text-xl leading-relaxed">
                        <p>
                            I 2020 hadde laget drevet barnehage i nesten 30 år i et hus laget eide.
                            Omstendighetene gjorde det slik at vi ble nødt å legge ned barnehagen,
                            og selge huset. For at laget skulle overleve så måtte vi selge, og vi måtte tenke nytt.<br />
                            På dette tidspunktet hadde vi veldig lite medlemmer  og en del hadde ikke troen på at vi kunne
                            få laget ‘i levende live’ igjen.<br />
                            Tidlig hadde vi en god del tanker om hva vi ville og hvem vi evt ville prøve å jobbe med.
                            Vi tenkte med en gang at for å få oss opp og frem burde vi samarbeide med noen andre ,
                            for å vises for flere og ha litt dra hjelp, samt som vi hjalp dem i gjengjeld.
                        </p>

                        <p>
                            Vi klarte å lage et samarbeid med e-fiks gaming.
                            Noe de som var på landsmøte fikk en liten introduksjon om,
                            av vårt nye medlem Bent. For de som ikke var på landsmøtet kan vi ta en liten introduksjon :
                            E-fiks gaming Senter for sosial gaming og kreativ utvikling.<br />
                            De sprer budskap rundt sunn gaming, skaper trygge rammer for ungdom.
                            Ungdom som ikke nødvendigvis ønsker å holde på med vanlig idrett,
                            vil holde på med begge deler og for de som kan stå i fare for i falle utenfor.
                            De lærer barn og unge hvordan de skal praktisere smart og trygg gaming.
                            De brukes både i skolen og på fritiden. Man ser virkelig hva en slik plass kan bety for ungdommer,
                            som blir møtt der de er og sett for den de er.<br />
                            E-fiks anerkjenner også kompetansen gaming kan gi og er en motvekt til utenforskap og hets.
                        </p>

                        <p>
                            Etter år med hard jobbing fikk vi muligheten til å til å pusse opp et rom i deres lokaler for å
                            drive det vi ønsket i samarbeid med de. Vi endte på en ‘retrocafe’ siden vi har så mye lagret
                            av lagets historie som vi håpte kunne bli en del av det vi gjorde videre. <br />
                            Derfor  pusset vi opp et
                            stort rom, kjøpte inn alt vi trengte av møbler og utstyr for å skape et skikkelig stilig retrocafe.
                        </p>

                        <p>
                            Retrocafen har vi åpen på lørdager, der vi tilbyr både ungdommene og foreldre noe å bite i.<br />
                            Vi har brettspill og gamle spillkonsoller for å holde det innenfor retro aspektet.
                            Rommet kan også brukes av e-fiks og ungdommene utenfor laget sine åpningstider.
                            Vi har via retrocafeen vært så heldig å fått åtte nye medlemmer, nå er vi 19!
                        </p>

                        <p>
                            Vi har jobbet hardt med å skaffe og holde på medlemmer, vi har pr i  dag 19 medlemmer,
                            7 av disse er menn. Vi har måtte vist hvem vi er og hva vi står for.
                            Med det navnet vi har kan mange i første omgang tenke at dette er ikke noe som omgår
                            meg, derfor har det vært viktig for oss å motbevise dette.
                        </p>

                        <p>
                            Det er utrolig kjekt å se og være en del av miljøet rundt disse ungdommene,
                            skape en trygg base og tilby en matbit og en pause fra alt annet.
                        </p>

                        <p>
                            Det har vært mye jobb og krevd mye men det gjør også at det man får til føles enda bedre!<br/>
                            Vi kommer til å jobbe på og er spente på hvor mange medlemmer vi har i starten av neste år.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs