import { useState, useEffect } from "react"
import OrderModal from "./components/OrderModal"
import Cardapio from "./sections/Cardapio"
import CtaFinal from "./sections/CtaFinal"
import Depoimentos from "./sections/Depoimentos"
import Filosofia from "./sections/Filosofia"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import SobreNos from "./sections/SobreNos"

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  const [tema, setTema] = useState('light')

  useEffect(() => {
    if (tema === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [tema])

  function abrirModal() {
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
  }

  function alternarTema() {
    setTema(tema === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Header 
        aoClicarEncomendar={abrirModal}
        tema={tema}
        aoClicarTema={alternarTema} />

      <Hero aoClicarEncomendar={abrirModal} />
      <Cardapio aoClicarEncomendar={abrirModal} />
      <SobreNos />
      <Filosofia />
      <Depoimentos />
      <CtaFinal aoClicarEncomendar={abrirModal} />
      <Footer />

      <OrderModal aberto={modalAberto} aoFechar={fecharModal} />
    </div>
  )
}

export default App
