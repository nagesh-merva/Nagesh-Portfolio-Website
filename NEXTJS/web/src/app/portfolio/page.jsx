import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Experience } from "../components/Experience"
import { Skills } from "../components/Skills"
import { Testimonials } from "../components/Testimonials"
import { Community } from "../components/Community"
import { Certifications } from "../components/Certifications"

export default function Portfolio() {

    return (
        <div className="h-full w-full overflow-hidden">
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Testimonials />
            <Community />
            <Certifications />
        </div>
    )
}
