"use client"

import AboutMainSection from "../components/AboutMainSection"
import CardGrid from "../components/EventsSection"
import DomainSection from "../components/DomainSection"
import { RandomFactsSection } from "../components/RandomFactsSection"
import SkillsChart from "../components/SkillsSection"
import FeaturedContent from "../components/FeaturedContent"
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

