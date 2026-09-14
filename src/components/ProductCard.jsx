function ProductCard({ imagem, nome, descricao, preco}) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
            <img src={imagem} alt={nome} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" />

            <div className="p-7">
                <h3 className="font-serif text-lg font-bold text-[#3d2418]">
                    {nome}
                </h3>
                <p className="mt-1 text-sm text-[#6b5347]">
                    {descricao}
                </p>
                <div className="mt-6 flex items-center justify-between">
                    <span className="font-serif font-bold text-[#a05a3f]">
                        {preco}
                    </span>
                    <button className="cursor-pointer rounded-full bg-[#3d2418] px-4 py-2 text-xs text-white transition-colors hover:bg-[#a05a3f]">
                        Encomendar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
