import './App.css'
import Contact from './components/contact/Contact'
import Copyright from './components/copyright/Copyright'
import HeroSection from './components/hero/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import Projects from './components/projects/Projects'
import Skills from './components/skills/skills'


function App() {


  return (
  <main>

  <NavbarMain/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Copyright/>

  </main>
  )
}

export default App
