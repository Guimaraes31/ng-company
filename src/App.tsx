import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Servicos from './sections/Servicos'
import Precos from './sections/Precos'
import Beneficios from './sections/Beneficios'
import Processo from './sections/Processo'
import Destaques from './sections/Destaques'
import FAQ from './sections/FAQ'
import CTAFinal from './sections/CTAFinal'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <Servicos />
      <Precos />
      <Beneficios />
      <Processo />
      <Destaques />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  )
}


