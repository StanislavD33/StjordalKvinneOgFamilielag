import logo from '../assets/icons/Pagelogo.png'

export default function Header() {
    return (
        <header class="bg-[#002447] text-white px-8 py-6">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">

                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-[#c4a45a] flex items-center justify-center rounded-sm overflow-hidden">
                        <img src={logo} alt="Logo" class="object-contain p-1"/>
                    </div>

                    <h1 class="text-3xl md:text-4xl font-serif font-bold tracking-wide uppercase">
                        Stjørdal Kvinne og Familielag
                    </h1>
                </div>

            </div>

            <nav class="max-w-7xl mx-auto mt-6">
                <ul class="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-wider">
                    <li>
                        <a href="#" class="border-b-2 border-white pb-1">Hjem</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-gray-300 transition-colors">Om Oss</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-gray-300 transition-colors">Retrocafe</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-gray-300 transition-colors">Kalender</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-gray-300 transition-colors">Bli Medlem</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-gray-300 transition-colors">Kontakt Oss</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}