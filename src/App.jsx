import Cardapio from "./sections/Cardapio"
import CtaFinal from "./sections/CtaFinal"
import Depoimentos from "./sections/Depoimentos"
import Filosofia from "./sections/Filosofia"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import SobreNos from "./sections/SobreNos"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Cardapio />
      <SobreNos />
      <Filosofia />
      <Depoimentos />
      <CtaFinal />
      <Footer />
    </div>
  )
}

export default App
