import Cardapio from "./sections/Cardapio"
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
    </div>
  )
}

export default App
