"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
export const Carousel = ({
  children,
  isNotMobileScreens,
}: {
  children: ReactNode;
  isNotMobileScreens:boolean;
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();
  useEffect(() => {
    const scrollWIdth = carousel?.current?.scrollWidth;
    const offSetWidth = carousel?.current?.offsetWidth;
    console.log(offSetWidth);
    const leftConstarint = scrollWIdth - offSetWidth;
    setWidth(leftConstarint);
  }, [isNotMobileScreens]);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="innerCarousel"
        style={{ backgroundColor: "",display:"flex" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
