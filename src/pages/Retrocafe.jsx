import React from "react";

import RetrocafeIcon from "../assets/icons/retrocafe_tv_icon.png";
import RetrocafePoster from "../assets/images/retrocafe_poster.png";

function Retrocafe() {
    return (
        <div className="bg-[#f5f5f5] text-black">
            {/* Hero */}

            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="text-right">
                    <h3 className="inline-block uppercase tracking-widest font-bold bg-black p-2 text-white text-2xl text-extrabold">
                        Retrokafe
                    </h3>
                    <div className="bg-[#1f3a5f] uppercase text-white inline-block p-2 text-xl leading-tight font-medium">
                        <p>
                            En møteplass for alle. Et sted for spill, samtaler og gode opplevelser – midt i hjertet av Stjørdal.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-90 h-full flex items-center justify-center">
                        <img
                            src={RetrocafeIcon}
                            alt="Family"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="w-full h-[650px] flex items-center justify-center">
                    <img
                        src={RetrocafePoster}
                        alt="Family"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Text */}
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4 uppercase">
                        HVA ER RETROKAFE?
                    </h2>
                    {/* 1-st version with text-xl and font-medium */}
                    <p className="mb-4 text-xl leading-normal normal">
                        Retrokafe er en sosial møteplass drevet av Stjørdal Kvinne- og Familielag i samarbeid med E-fiks Gaming.<br />
                        Her kombinerer vi nostalgi, fellesskap og kreativitet i et miljø der alle kan føle seg velkommen.
                    </p>

                    <p className="mb-4 text-xl leading-normal font-normal">
                        Hver lørdag åpner vi dørene for ungdom, foreldre og andre som ønsker en hyggelig pause fra hverdagen.<br />
                        Her kan man spille brettspill, prøve gamle spillkonsoller eller bare ta en prat over en kopp kaffe og noe godt å spise.
                    </p>

                    <ul className="text-xl space-y-2 list-disc list-inside mb-4 leading-normal font-normal">
                        <p>På Retrokafe kan du blant annet:</p>
                        <li>Spille brettspill med venner</li>
                        <li>Prøve klassiske spillkonsoller</li>
                        <li>Møte nye mennesker</li>
                        <li>Ta en pause med kaffe, vafler eller enkel mat</li>
                        <li>Oppleve et miljø preget av trygghet og fellesskap</li>
                    </ul>

                    <p className="text-xl leading-normal font-normal">Vi ønsker å skape en arena der ungdom og voksne kan møtes på tvers av interesser og generasjoner.</p>

                </div>
            </section>

            {/* Collaboration */}
            <section className="max-w-7xl mx-auto px-6 py-10 text-left">
                <h3 className="font-bold uppercase mb-4 text-2xl">
                    Samarbeid med E-Fisk Gaming
                </h3>

                <p className="mb-4 text-xl leading-tight font-normal">
                    Retrokafe er en del av vårt samarbeid med E-fiks Gaming – et senter for sosial gaming og kreativ utvikling.<br />
                    Sammen jobber vi for å skape trygge rammer for ungdom og vise hvordan gaming kan være en positiv arena for læring, mestring og fellesskap.
                </p>

                <p className="text-xl leading-tight font-normal">
                    Gjennom dette samarbeidet ønsker vi å bidra til å forebygge utenforskap og gi flere en plass der de kan være seg selv.
                </p>
            </section>

            {/* Visit Section */}
            <section className="max-w-7xl mx-auto px-6 py-12 text-left">
                <h3 className="font-bold uppercase mb-4 text-2xl">
                    Vil du besøke Retrokafe?
                </h3>

                <p className="mb-4 text-xl leading-tight font-medium">Vi holder åpent hver lørdag.<br/>
                    Alle er velkommen!</p>

                <ul className="space-y-2 leading-tight font-medium">
                    <li>📅 Se åpningstider i aktivitetskalenderen</li>
                    <li>🎮 Interessert i å bli medlem? Bli med i laget vårt!</li>
                </ul>
            </section>
        </div>
    )
}

export default Retrocafe