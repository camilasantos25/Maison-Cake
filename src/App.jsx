import Cardapio from "./sections/Cardapio"
import Depoimentos from "./sections/Depoimentos"
import Filosofia from "./sections/Filosofia"
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
    </div>
  )
}

export default App
