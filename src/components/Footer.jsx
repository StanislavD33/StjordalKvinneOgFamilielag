import logo from '../assets/icons/Pagelogo.png'

function Footer() {
    return (
        <footer className="bg-[#1f3a5f] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex items-start gap-2">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-16 h-16 object-contain"
                    />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide text-left">
                        Norges Kvinne og <br />
                        Familieforbund
                    </h2>
                </div>
            </div>
            <div className="max-w-6xl mx-auto items-start mt-4 text-left leading-loose">
                <p className="text-md text-gray-300">Stjørdal, 7500</p>
                <p className="text-md text-gray-300">
                    stjordalkf@outlook.com
                </p>
                <p className="text-md text-gray-300">+47 413 68 112</p>
            </div>
        </footer>
    )
}

export default Footer