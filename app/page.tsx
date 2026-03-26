import NavBar from "./component/NavBar"
import Hero from "./component/Hero"
import Propos from "./component/Propos"
import Competence from "./component/Competence"
import Contact from "./component/Contact"
import Projets from "./component/Projects"
function page() {
  return (
    <div className="px-15">
      <NavBar />
      <Hero />
      <hr className="text-[var(--vert)]"/>
      <Propos />
      <hr className="text-[var(--vert)]"/>
      <Projets />
      <hr className="text-[var(--vert)]"/>
      <Competence />
      <hr className="text-[var(--vert)]"/>
      <Contact />

    </div>
  )
}

export default page