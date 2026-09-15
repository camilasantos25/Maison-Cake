import ProductCard from "../components/ProductCard"
import boloChocolate from '../assets/bolo-chocolate.webp'
import redVelvet from '../assets/red-velvet.webp'
import boloMorango from '../assets/bolo-morango.webp'
import boloLimao from '../assets/bolo-limao.webp'

const bolos = [
    {
        imagem: boloChocolate,
        nome: 'Bolo de Chocolate',
        descricao: 'Camadas de massa escura e ganache aveludada, para os amantes do cacau.',
        preco: 'R$ 189',
    },
    {
        imagem: redVelvet,
        nome: 'Red Velvet',
        descricao: 'Vermelho vibrante, cream cheese fresco e textura incrivelmente macia.',
        preco: 'R$ 209',
    },
    {
        imagem: boloMorango,
        nome: 'Bolo de Morango',
        descricao: 'Morangos frescos sobre chantilly leve, leveza e elegância em cada camada.',
        preco: 'R$ 219',
    },
    {
        imagem: boloLimao,
        nome: 'Bolo de Limão',
        descricao: 'Cítrico, refrescante e com cobertura de merengue tostado na hora.',
        preco: 'R$ 179',
    }
]

function Cardapio({ aoClicarEncomendar }) {
    return (
        <section id="bolos" className="bg-[#f4ebe1] px-16 py-20 dark:bg-[#1a1109]">
            <div className="mx-auto max-w-7xl">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                        CARDÁPIO
                    </p>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-[#3d2418] dark:text-[#f4ebe1]">
                        Nossos favoritos
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-4 gap-6">
                    {bolos.map((bolo, index) => (
                        <ProductCard
                            key={index}
                            imagem={bolo.imagem}
                            nome={bolo.nome}
                            descricao={bolo.descricao}
                            preco={bolo.preco}
                            aoClicarEncomendar={aoClicarEncomendar}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cardapio
