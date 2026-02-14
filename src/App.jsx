import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      {/* Animated background */}
      <div className="bg-grid"></div>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Portfolio Siswa SMK RPL — Built with React & Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
