function Filosofia() {
    return (
        <section className="bg-[#3d2418] px-16 py-24 text-center">
            <div className="mx-auto max-w-2xl">
                <p className="text-xs font-semibold tracking-widest text-[#c9a68c]">
                    NOSSA FILOSOFIA
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold text-white">
                    Feito com carinho,{' '}
                    <br />
                    <span className="italic">servido com amor.</span>
                </h2>
                <p className="mt-6 text-sm text-[#d9c7ba]">
                    Não produzimos em massa. Cada bolo é uma conversa entre quem cria e
                    quem vai receber, onde cada detalhe importa.
                </p>
                <a href="#bolos" className="mt-8 inline-block cursor-pointer rounded-full border border-[#d9c7ba] px-6 py-3 text-sm text-white transition-colors hover:bg-[#faf3ec] hover:text-[#3d2418]">
                    Conheça nossos sabores
                </a>
            </div>
        </section>
    )
}

export default Filosofia
