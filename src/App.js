import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}