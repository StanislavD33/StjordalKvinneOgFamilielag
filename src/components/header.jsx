import logo from '../assets/icons/Pagelogo.png'

import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-[#002142] text-white px-6 py-4 font-sans">
  <div className="max-w-6xl mx-auto flex items-center gap-5">
    
    <div className="w-12 h-12 bg-[#d4af37] flex-shrink-0 flex items-center justify-center overflow-hidden">
      <img src={logo} alt="Logo" className="w-full h-full object-cover" />
    </div>

    <div className="flex flex-col gap-3">
      
      <h1 className="text-2xl font-serif font-bold tracking-tight uppercase leading-none">
        Stjørdal Kvinne og Familielag
      </h1>

      {/* NavLink automaticly track the active link */}
      <nav className="flex gap-x-6 text-[11px] font-bold uppercase tracking-widest items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Hjem
        </NavLink>
        <NavLink
          to="/omoss"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Om Oss
        </NavLink>
        <NavLink
          to="/retrocafe"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Retrocafe
        </NavLink>
        <NavLink
          to="/kalender"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Kalender
        </NavLink>
        <NavLink
          to="/blimedlem"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Bli Medlem
        </NavLink>
        <NavLink
          to="/kontaktoss"
          end
          className={({ isActive }) =>
                                    isActive ? "border-b-[1px] border-white leading-tight" : "hover:text-gray-300 transition-colors"
                                }
          >
            Kontakt Oss
        </NavLink>
      </nav>

    </div>
  </div>
</header>
    )
}