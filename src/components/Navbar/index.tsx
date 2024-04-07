"use client";
import React from 'react'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import Navlinks from '../Navlink/Navlinks';
import { PRIMARY_COLOR } from '@/utilities/constants';
const Navbar = () => {
  const isMobile = useMediaQuery("(min-width: 900px)");
  const styles = {
    link: {
      textDecoration: "none",
    },
    mainContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: "1.5rem",
      px:{xs:"0rem",sm:"2rem",md:"4rem"}
    },
    button:{
      bgcolor:PRIMARY_COLOR,
      color:"white",
      px:"1rem"
    }
  };
  return (
    <Box sx={styles.mainContainer}>
      <Image
        src={logo}
        alt="logo"
        style={{ width: isMobile ?"14.3rem" :"10rem", height: "auto" }}
      />
      {isMobile && (
        <Box sx={{ display: "flex", gap: "3rem" }}>
          <Navlinks title="Home" path="" />
          <Navlinks title="Services" path="services" />
          <Navlinks title="About Us" path="about" />
          <Navlinks title="FAQ" path="faq" />
        </Box>
      )}

      <Button sx={styles.button}>Download app</Button>
    </Box>
  );
}

export default Navbar