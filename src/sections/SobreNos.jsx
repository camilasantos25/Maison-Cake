import doces from '../assets/doces.webp'

function SobreNos() {
    return (
        <section id='sobre' className='bg-[#faf3ec] px-16 py-20'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 items-center gap-12'>
                <img
                    src={doces}
                    alt="Doces decorados com chocolate por cima"
                    className="h-[420px] w-full rounded-3xl object-cover"
                />

                <div>
                    <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                        NOSSA HISTÓRIA
                    </p>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-[#3d2418]">
                        Nascemos de uma paixão pelo detalhe.
                    </h2>

                    <p className="mt-6 text-sm text-[#6b5347]">
                        A Maison Cake nasceu em 2018 de uma cozinha pequena e de um sonho
                        grande: provar que um bolo pode ser uma obra de arte. Nossa
                        fundadora, trazia da Europa a técnica e da família
                        brasileira a afetividade.
                    </p>
                    <p className="mt-4 text-sm text-[#6b5347]">
                        Hoje atendemos São Paulo com encomendas personalizadas para
                        casamentos, aniversários e celebrações íntimas. Cada pedido é
                        único, cada camada é feita com presença e cuidado.
                    </p>
                    <p className="mt-4 text-sm text-[#6b5347]">
                        Usamos manteiga, ovos e frutas de produtores locais porque
                        acreditamos que o sabor começa na escolha dos ingredientes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SobreNos
