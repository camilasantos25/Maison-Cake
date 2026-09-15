import boloHero from '../assets/bolo-hero.webp'

function Hero({ aoClicarEncomendar }) {
    return (
        <section id="inicio" className="bg-[#faf3ec] px-16 py-20 dark:bg-[#150e0a]">
            <div className='mx-auto grid max-w-7xl grid-cols-2 items-center gap-12'>
                <div>
                    <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                        CONFEITARIA ARTESANAL - SÃO PAULO
                    </p>
                    <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-[#3d2418] dark:text-[#f4ebe1]">
                        Bolos feitos para{' '}
                        <span className="text-[#a05a3f]">transformar</span> momentos em
                        memórias.
                    </h1>
                    <p className="mt-6 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                        Cada bolo é preparado à mão, com ingredientes selecionados e
                        dedicação que só a confeitaria artesanal pode oferecer.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href='#bolos' className="cursor-pointer rounded-full bg-[#3d2418] px-6 py-3 text-sm text-white transition-colors hover:bg-[#a05a3f]">
                            Ver nossos bolos
                        </a>
                        <button onClick={aoClicarEncomendar} className="cursor-pointer rounded-full border border-[#3d2418] px-6 py-3 text-sm text-[#3d2418] transition-colors hover:border-[#a05a3f] dark:border-[#c9b8ab] dark:text-[#f4ebe1]">
                            Fazer encomenda
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={boloHero}
                        alt="Bolo de chocolate decorado com morangos"
                        className="h-[600px] w-full rounded-3xl object-cover"
                    />
                    <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-6 py-4 shadow-lg dark:bg-[#251a13]">
                        <p className="font-serif text-2xl font-bold text-[#a05a3f]">+200</p>
                        <p className="text-xs text-[#6b5347]">sabores criados</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero