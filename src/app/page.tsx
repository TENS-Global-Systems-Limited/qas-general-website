"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Homesections/HeroSection";
import OurServices from "@/components/Homesections/ourServices";
import WhoWeAre from "@/components/Homesections/who-we-are";
import Cards from "@/components/ResusableComp/Cards";
import { Carousel } from "@/components/ResusableComp/carousel";
import Mission from "@/components/Homesections/MIssion";
import Certifiedartisans from "@/components/Homesections/Certifiedartisans";
import HowItWorks from "@/components/Homesections/how-it-works";
import AccordionWrapper from "@/components/ResusableComp/AccordionWrapper";
import { Typography } from "@mui/material";
import Mobilemockup from "@/components/Homesections/Mobilemockup";
import Faq from "@/components/Homesections/Faq";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <HeroSection />
      <OurServices />
      <WhoWeAre  />
      <Mission />
      <Certifiedartisans />
      <HowItWorks />
      <Mobilemockup />
      <Faq />
    </main>
  );
}
