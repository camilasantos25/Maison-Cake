import { useState } from 'react'
import CloseIcon from '../assets/close.svg?react'

function validar(dados) {
    const erros = {}

    if (!dados.nome.trim()) {
        erros.nome = 'Este campo é obrigatório.'
    }
    if (!dados.whatsapp.trim()) {
        erros.whatsapp = 'Este campo é obrigatório.'
    }
    if (!dados.sabor) {
        erros.sabor = 'Selecione um sabor.'
    }
    if (!dados.data) {
        erros.data = 'Selecione uma data.'
    }
    return erros
}

function OrderModal({ aberto, aoFechar }) {
    const [dados, setDados] = useState({
        nome: '',
        whatsapp: '',
        sabor: '',
        data: '',
        observacoes: '',
    })

    const [erros, setErros] = useState({})

    if (!aberto) return null

    function handleChange(campo, valor) {
        setDados({
            ...dados,
            [campo]: valor,
        })
    }

    function resetarEFechar() {
        setDados({
            nome: '',
            whatsapp: '',
            sabor: '',
            data: '',
            observacoes: '',
        })
        setErros({})
        aoFechar()
    }

    function handleSubmit(event) {
        event.preventDefault()

        const errosEncontrados = validar(dados)
        setErros(errosEncontrados)
        const formularioValido = Object.keys(errosEncontrados).length === 0

        if (formularioValido) {
            console.log('Pedido enviado:', dados)
            resetarEFechar()
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-[#251a13]">
                <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#3d2418] dark:text-[#f4ebe1]">
                        Fazer encomenda
                    </h3>
                    <button
                        onClick={resetarEFechar}
                        className="cursor-pointer rounded-full p-2 transition-colors hover:bg-[#f4ebe1] dark:text-[#f4ebe1] dark:hover:bg-[#3d2c22]">
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418] dark:text-[#f4ebe1]">
                            Seu nome
                        </label>
                        <input
                            type="text"
                            placeholder="Ana Silva"
                            value={dados.nome}
                            onChange={(event) => handleChange('nome', event.target.value)}
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#3d2418] outline-none focus:border-[#a05a3f] dark:bg-[#1a1109] dark:text-[#f4ebe1] ${erros.nome ? 'border-red-400' : 'border-[#e5dcd0] dark:border-[#3d2c22]'}`} />

                        {erros.nome && (
                            <p className="mt-1 text-xs text-red-500">{erros.nome}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418] dark:text-[#f4ebe1]">
                            WhatsApp
                        </label>
                        <input
                            type="text"
                            placeholder="(11) 99999-9999"
                            value={dados.whatsapp}
                            onChange={(event) => handleChange('whatsapp', event.target.value)}
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#3d2418] outline-none focus:border-[#a05a3f] dark:bg-[#1a1109] dark:text-[#f4ebe1] ${erros.whatsapp ? 'border-red-400' : 'border-[#e5dcd0] dark:border-[#3d2c22]'}`} />

                        {erros.whatsapp && (
                            <p className="mt-1 text-xs text-red-500">{erros.whatsapp}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418] dark:text-[#f4ebe1]">
                            Sabor desejado
                        </label>
                        <select
                            value={dados.sabor}
                            onChange={(event) => handleChange('sabor', event.target.value)}
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#3d2418] outline-none focus:border-[#a05a3f] dark:bg-[#1a1109] dark:text-[#f4ebe1] ${erros.sabor ? 'border-red-400' : 'border-[#e5dcd0] dark:border-[#3d2c22]'}`}>
                            <option value="">Selecione um sabor</option>
                            <option value="Bolo de Chocolate">Bolo de Chocolate</option>
                            <option value="Red Velvet">Red Velvet</option>
                            <option value="Bolo de Morango">Bolo de Morango</option>
                            <option value="Bolo de Limão">Bolo de Limão</option>
                        </select>

                        {erros.sabor && (
                            <p className="mt-1 text-xs text-red-500">{erros.sabor}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418] dark:text-[#f4ebe1]">
                            Data do evento
                        </label>
                        <input
                            type="date"
                            value={dados.data}
                            onChange={(event) => handleChange('data', event.target.value)}
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#3d2418] outline-none focus:border-[#a05a3f] dark:bg-[#1a1109] dark:text-[#f4ebe1] ${erros.sabor ? 'border-red-400' : 'border-[#e5dcd0] dark:border-[#3d2c22]'}`} />

                        {erros.data && (
                            <p className="mt-1 text-xs text-red-500">{erros.data}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-[#3d2418] dark:text-[#f4ebe1]">
                            Observações
                        </label>
                        <textarea
                            placeholder="Número de porções, decoração especial..."
                            rows={3}
                            value={dados.observacoes}
                            onChange={(event) => handleChange('observacoes', event.target.value)}
                            className="mt-1 w-full rounded-lg border border-[#e5dcd0] bg-white px-3 py-2 text-sm text-[#3d2418] outline-none focus:border-[#a05a3f] dark:border-[#3d2c22] dark:bg-[#1a1109] dark:text-[#f4ebe1]" />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 cursor-pointer rounded-full bg-[#3d2418] px-6 py-3 text-sm text-white transition-colors hover:bg-[#a05a3f]">
                        Enviar pedido
                    </button>
                </form>

            </div>
        </div>
    )
}

export default OrderModal
