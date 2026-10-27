"use client";

import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import TopBar from "@/components/TopBar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ExplainerVideo from "@/components/home/ExplainerVideo";
import MatchStage from "@/components/home/MatchStage";
import Audience from "@/components/home/Audience";
import { FinalCta, Footer } from "@/components/home/FinalCta";
import "./home.css";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    // reducedMotion="never": play animations even if the OS "reduce motion" setting is on.
    <MotionConfig reducedMotion="never">
    <main className="page home">
      <motion.div className="read-bar" style={{ scaleX: bar }} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <TopBar showLogin />
      <Hero />
      <HowItWorks />
      <ExplainerVideo />
      <MatchStage />
      <Audience />
      <FinalCta />
      <Footer />
    </main>
    </MotionConfig>
  );
}
