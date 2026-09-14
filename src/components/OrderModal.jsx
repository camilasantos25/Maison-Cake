import CloseIcon from '../assets/close.svg?react'

function OrderModal({ aberto, aoFechar }) {
    if (!aberto) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-[#faf3ec] p-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#3d2418]">
                        Fazer encomenda
                    </h3>
                    <button onClick={aoFechar} className="cursor-pointer rounded-full p-2 transition-colors hover:bg-[#f4ebe1]">
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form className="mt-6 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418]">
                            Seu nome
                        </label>
                        <input
                            type="text"
                            placeholder="Ana Silva"
                            className="mt-1 w-full rounded-lg bg-white border border-[#e5dcd0] px-3 py-2 text-sm outline-none focus:border-[#a05a3f]"/>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418]">
                            WhatsApp
                        </label>
                        <input
                            type="text"
                            placeholder="(11) 99999-9999"
                            className="mt-1 w-full rounded-lg bg-white border border-[#e5dcd0] px-3 py-2 text-sm outline-none focus:border-[#a05a3f]"/>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418]">
                            Sabor desejado
                        </label>
                        <select className="mt-1 w-full rounded-lg bg-white border border-[#e5dcd0] px-3 py-2 text-sm outline-none focus:border-[#a05a3f]">
                            <option>Selecione um sabor</option>
                            <option>Bolo de Chocolate</option>
                            <option>Red Velvet</option>
                            <option>Bolo de Morango</option>
                            <option>Bolo de Limão</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418]">
                            Data do evento
                        </label>
                        <input
                            type="date"
                            className="mt-1 w-full rounded-lg bg-white border border-[#e5dcd0] px-3 py-2 text-sm outline-none focus:border-[#a05a3f]"/>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418]">
                            Observações
                        </label>
                        <textarea
                            placeholder="Número de porções, decoração especial..."
                            rows={3}
                            className="mt-1 w-full rounded-lg bg-white border border-[#e5dcd0] px-3 py-2 text-sm outline-none focus:border-[#a05a3f]"/>
                    </div>

                    <button type="submit" className="mt-2 cursor-pointer rounded-full bg-[#3d2418] px-6 py-3 text-sm text-white transition-colors hover:bg-[#a05a3f]">
                        Enviar pedido
                    </button>
                </form>
            </div>
        </div>
    )
}

export default OrderModal
