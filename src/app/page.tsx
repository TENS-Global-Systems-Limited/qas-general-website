import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Homesections/HeroSection";
import OurServices from "@/components/Homesections/ourServices";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <OurServices />
    </main>
  );
}
