import { useState } from "react"
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

  function abrirModal() {
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
  }

  return (
    <div>
      <Header aoClicarEncomendar={abrirModal} />
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
