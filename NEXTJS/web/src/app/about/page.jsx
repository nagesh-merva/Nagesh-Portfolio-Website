"use client"

import AboutMainSection from "../components/about/AboutMainSection"
import CardGrid from "../components/about/EventsSection"
import DomainSection from "../components/about/DomainSection"
import { RandomFactsSection } from "../components/about/RandomFactsSection"
import SkillsChart from "../components/about/SkillsSection"
import FeaturedContent from "../components/about/FeaturedContent"
import { motion } from "framer-motion"

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
            <DomainSection />
            <RandomFactsSection />
            <SkillsChart />
            <FeaturedContent />
        </motion.div>
    )
}

