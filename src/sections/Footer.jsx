function Footer() {
    return (
        <footer className="bg-[#f4ebe1] px-6 py-12 md:px-16 md:py-16 dark:bg-[#1a1109]">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                    <div>
                        <p className="font-serif text-xl font-bold text-[#3d2418] dark:text-[#f4ebe1]">
                            Maison <span className="italic">Cake</span>
                        </p>
                        <p className="mt-3 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                            Confeitaria artesanal em São Paulo. 
                            <br />
                            Bolos feitos para celebrar a vida.
                        </p>
                    </div>
 
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                            LINKS RÁPIDOS
                        </p>
                        <nav className="mt-4 flex flex-col items-start gap-2">
                            <a href="#inicio" className="text-sm text-[#6b5347] transition-colors hover:text-[#a05a3f] dark:text-[#c9b8ab]">
                                Início
                            </a>
                            <a href="#bolos" className="text-sm text-[#6b5347] transition-colors hover:text-[#a05a3f] dark:text-[#c9b8ab]">
                                Bolos
                            </a>
                            <a href="#sobre" className="text-sm text-[#6b5347] transition-colors hover:text-[#a05a3f] dark:text-[#c9b8ab]">
                                Sobre nós
                            </a>
                            <a href="#contato" className="text-sm text-[#6b5347] transition-colors hover:text-[#a05a3f] dark:text-[#c9b8ab]">
                                Contato
                            </a>
                        </nav>
                    </div>
 
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                            CONTATO
                        </p>
                        <div className="mt-4 flex flex-col gap-2 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                            <p>@maisoncake</p>
                            <p>(11) 99999-9999</p>
                            <p>São Paulo, SP</p>
                        </div>
                    </div>
                </div>
 
                <div className="mt-12 border-t border-[#e5dcd0] pt-6 text-center text-xs text-[#6b5347] dark:text-[#c9b8ab]">
                    <p>© 2026 Maison Cake. Todos os direitos reservados.</p>
                </div>
 
            </div>
        </footer>
    )
}
 
export default Footer
