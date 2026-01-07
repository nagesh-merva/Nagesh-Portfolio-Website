import Hero from "../components/portfolio/Hero"
import { Projects } from "../components/portfolio/Projects"
import { Experience } from "../components/portfolio/Experience"
import { Skills } from "../components/portfolio/Skills"
import { Community } from "../components/portfolio/Community"
import Certifications from "../components/portfolio/Certifications"

export default function Portfolio() {

    return (
        <div className="h-full w-full overflow-hidden">
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Community />
            <Certifications />
        </div>
    )
}
