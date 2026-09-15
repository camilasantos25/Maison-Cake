import TestimonialCard from "../components/TestimonialCard"
 
const depoimentos = [
    {
        texto: 'O bolo de morango da Maison Cake foi o ponto alto da nossa festa. Todos os convidados pediram o contato da confeitaria!',
        nome: 'Marina Souza',
        papel: 'Aniversariante',
    },
    {
        texto: 'Encomendei o Red Velvet para o casamento e superou todas as expectativas. Apresentação impecável e sabor inesquecível.',
        nome: 'Carla Mendes',
        papel: 'Noiva',
    },
    {
        texto: 'Atendimento delicado, entrega pontual e um bolo de chocolate que me fez chorar de felicidade. Recomendo de olhos fechados.',
        nome: 'Júlia Ferreira',
        papel: 'Cliente fiel',
    }
]
 
function Depoimentos() {
    return (
        <section className="bg-[#f4ebe1] px-6 py-12 md:px-16 md:py-20 dark:bg-[#1a1109]">
            <div className="mx-auto max-w-7xl text-center">
                <p className="text-xs font-semibold tracking-widest text-[#a05a3f]">
                    DEPOIMENTOS
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#3d2418] dark:text-[#f4ebe1] md:text-4xl">
                    O que dizem nossos clientes
                </h2>
 
                <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
                    {depoimentos.map((depoimento, index) => (
                        <TestimonialCard
                            key={index}
                            texto={depoimento.texto}
                            nome={depoimento.nome}
                            papel={depoimento.papel} />
                    ))}
                </div>
            </div>
        </section>
    )
}
 
export default Depoimentos
