function Header({ aoClicarEncomendar }) {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0e9e0] bg-[#faf3ec]/90 px-8 py-4 shadow-sm backdrop-blur-sm">
            <a href="#inicio" className="text-xl font-serif font-bold text-[#3d2418]">
                Maison <span className="italic">Cake</span>
            </a>
            <nav className="flex items-center gap-8">
                <a href="#inicio" className="text-sm text-[#3d2418] transition-colors hover:text-[#a05a3f]">Início</a>
                <a href="#bolos" className="text-sm text-[#3d2418] transition-colors hover:text-[#a05a3f]">Bolos</a>
                <a href="#sobre" className="text-sm text-[#3d2418] transition-colors hover:text-[#a05a3f]">Sobre nós</a>
                <a href="#contato" className="text-sm text-[#3d2418] transition-colors hover:text-[#a05a3f]">Contato</a>
            </nav>
            <button onClick={aoClicarEncomendar} className="cursor-pointer rounded-full bg-[#3d2418] px-5 py-2 text-sm text-white transition-colors hover:bg-[#a05a3f]">
                Encomendar
            </button>
        </header>
    )
}

export default Header
