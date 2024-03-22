"use client";
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {motion} from "framer-motion"
import Cards from '../ResusableComp/Cards';
import { Carousel } from '../ResusableComp/carousel';
const Mission = ({isMobile}:{isMobile:boolean}) => {
    const styles ={
      differentScreenpx :{
        px:{xs:"1rem",sm:"1.5rem",md:"2.5rem",lg:"4rem",xl:"4rem"},
        mt:"4rem",
        display:"flex",
        justifyContent:"center"
      }
    }
  return (
    <Box sx={styles.differentScreenpx}>
      <Carousel isNotMobileScreens={!isMobile}>
        <motion.div className="carouselItem" style={{ marginRight: "1.9rem" }}>
          <Cards title={"Our Mission"} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed eiusmod
        tempor incididunt ut labore dolore magna Lorem ipsum dolor.{" "}' />
        </motion.div>
        <motion.div className="carouselItem" style={{ marginRight: "1.9rem" }}>
          <Cards title={"Our Mission"} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed eiusmod
        tempor incididunt ut labore dolore magna Lorem ipsum dolor.{" "}' />
        </motion.div>
        <motion.div className="carouselItem" style={{ marginRight: "1.9rem" }}>
          <Cards title={"Our Mission"} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed eiusmod
        tempor incididunt ut labore dolore magna Lorem ipsum dolor.{" "}' />
        </motion.div>
      </Carousel>
    </Box>
  );
}
export async function getStaticProps() {
  const isMobile = useMediaQuery("(min-width: 600px)");

  return {
    props: {
      isMobile,
    },
  };
}


export default Mission