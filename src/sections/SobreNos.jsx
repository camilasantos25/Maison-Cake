import doces from '../assets/doces.webp'
 
function SobreNos() {
    return (
        <section id='sobre' className="bg-[#faf3ec] px-6 py-12 md:px-16 md:py-20 dark:bg-[#150e0a]">
            <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12'>
                <img
                    src={doces}
                    alt="Doces decorados com chocolate por cima"
                    className="h-[280px] w-full rounded-3xl object-cover md:h-[420px]"/>
 
                <div>
                    <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                        NOSSA HISTÓRIA
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-bold text-[#3d2418] dark:text-[#f4ebe1] md:text-4xl">
                        Nascemos de uma paixão pelo detalhe.
                    </h2>
 
                    <p className="mt-6 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                        A Maison Cake nasceu em 2018 de uma cozinha pequena e de um sonho
                        grande: provar que um bolo pode ser uma obra de arte. Nossa
                        fundadora, trazia da Europa a técnica e da família
                        brasileira a afetividade.
                    </p>
                    <p className="mt-4 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                        Hoje atendemos São Paulo com encomendas personalizadas para
                        casamentos, aniversários e celebrações íntimas. Cada pedido é
                        único, cada camada é feita com presença e cuidado.
                    </p>
                    <p className="mt-4 text-sm text-[#6b5347] dark:text-[#c9b8ab]">
                        Usamos manteiga, ovos e frutas de produtores locais porque
                        acreditamos que o sabor começa na escolha dos ingredientes.
                    </p>
                </div>
            </div>
        </section>
    )
}
 
export default SobreNos
