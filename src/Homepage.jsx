import React from 'react'

import FamilyIcon from './assets/icons/family_icon.png'
import SamarbeidIcon from './assets/icons/samarbeid_icon.png'
import CalendarIcon from './assets/icons/calendar_icon.png'
import HistoryIcon from './assets/icons/history_icon.png'
import CommunityIcon from './assets/icons/community_icon.png'
import RetroCafeIcon from './assets/icons/retrocafe_icon.png'
import ContactIcon from './assets/icons/contact_icon.png'

function Homepage() {
  const cards = [
    { title: "Samarbeid med E-Fiks", img: SamarbeidIcon },
    { title: "Kalender", img: CalendarIcon },
    { title: "Historikk", img: HistoryIcon },
    { title: "Felleskap For Ungdom og Foreldre", img: CommunityIcon },
    { title: "Retrocafe(hver lørdag)", img: RetroCafeIcon },
    { title: 'Kontakt oss', img: ContactIcon }
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HERO */} 
        <div className="grid md:grid-cols-2 gap-10 items-center text-xl">

          <img
            src={FamilyIcon}
            alt="Family"
            className="w-full max-w-6xl mx-auto"
          />
          <div className="max-w-md text-left">
            <h3 className="inline-block uppercase tracking-widest font-semibold bg-black p-3 text-xl text-white">
              Vårt arbeid
            </h3>
            <div className="bg-[#1f3a5f] text-white p-2">


              <p className="leading-normal uppercase text-xl">
                Vi jobber for å skape et åpent og inkluderende fellesskap i
                Stjørdal. Vi ønsker å forebygge utenforskap, styrke samholdet i
                nærmiljøet og vise at laget vårt er for alle – uansett alder og
                bakgrunn.
              </p>
            </div>
          </div>

        </div>

        {/* TEXT SECTIONS */}
        <div className="grid md:grid-rows-3 gap-12 text-black text-left">

          <div>
            <h4 className="font-semibold mb-2 text-2xl uppercase">Hvem er vi?</h4>

            <p className="mb-4 text-xl leading-tight font-normal">
              Stjørdal Kvinne- og Familielag er et lokalt lag i Norges
              Kvinne- og Familieforbund.<br/>
              Vi er en engasjert gruppe kvinner og
              menn som ønsker å skape et inkluderende og trygt fellesskap i
              nærmiljøet.
            </p>

            <p className="mb-4 text-xl leading-tight font-normal">
              I dag samarbeider vi med E-fiks Gaming og Driver Retrocafe - en sosial møteplass for ungdom og voksne. Vi er små i antall, men store i engasjement.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-2xl uppercase">Vårt formål</h4>

            <p className="mb-4 text-xl leading-tight font-normal">
              Vårt formål er å styrke fellesskap, tilhørighet og inkludering i
              Stjørdal. Vi ønsker å bidra til et nærmiljø der både ungdom og voksne blir sett, hørt og verdsatt.
            </p>

            <p className="mb-4 text-xl leading-tight font-normal">
              Gjennom samarbeid, frivillighet og aktiviteter arbeider
              vi for å forebygge utenforskap og skape trygge møteplasser for
              alle.
            </p>           
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-2xl uppercase">Vår visjon</h4>

            <p className=" mb-4 text-xl leading-tight font-normal">
              Vår visjon er et lokalsamfunn der ingen faller utenfor.<br/>
              Vi ønsker å være en synlig og positiv aktør som bygger broer mellom
              generasjoner og skaper rom for både historie og nytenkning.
            </p>

            <p className="mb-4 text-xl leading-tight font-normal">
              Vi tror at små lag kan gjøre en stor forskjell - når vi står sammen.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#1f3a5f] rounded-2xl p-6 text-center text-white shadow-lg hover:scale-105 transition hover:shadow-2xl flex flex-col items-center justify-between aspect-[3/4]"
            >
              <img
                src={card.img}
                alt=""
                className="h-105 mx-auto mb-6 object-contain"
              />

              <button className="bg-red-500 px-5 py-2 rounded-full text-sm font-bold hover:bg-red-600 transition">
                {card.title}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Homepage
