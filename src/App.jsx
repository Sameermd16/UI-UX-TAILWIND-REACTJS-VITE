import Hero from "./sections/Hero"
import CustomerReviews from "./sections/CustomerReviews"
import Footer from './sections/Footer'
import PopularProducts from "./sections/PopularProducts"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import Nav from "./components/Nav"

function App() {

  return (
    <mian className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
    </mian>
  )
}

export default App
  