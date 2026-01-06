"use client"

import AboutMainSection from "../components/about/AboutMainSection"
import CardGrid from "../components/about/EventsSection"
import RandomFactsSection from "../components/about/RandomFactsSection"
import SkillsChart from "../components/about/SkillsSection"
import { motion } from "framer-motion"
import AboutContent from "../components/about/AboutContent"

export default function AboutPage() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
        >
            <AboutMainSection />
            <CardGrid />
            <AboutContent />
            <RandomFactsSection />
            <SkillsChart />
        </motion.div>
    )
}

