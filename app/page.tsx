import Hero from "./components/hero"
import About from "./components/about"
import Footer from "./components/footer"
import Header from "./components/header"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}