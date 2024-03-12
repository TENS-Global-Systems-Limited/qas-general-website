
import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import Navlinks from '../Navlink/Navlinks';
import { PRIMARY_COLOR } from '@/utilities/constants';
const Navbar = () => {
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
      px: "2rem",
    },
    button:{
      bgcolor:PRIMARY_COLOR,
      color:"white",
      px:"1rem"
    }
  };
  return (
    <Box
      sx={styles.mainContainer}
    ><Image src={logo} alt='logo' style={{width:"14.3rem",height:"5rem"}}/>
    <Box sx={{display:"flex",gap:"3rem"}}>
     <Navlinks title='Home' path="" />
     <Navlinks title='Services' path="services" />
     <Navlinks title='About Us' path="about" />
     <Navlinks title='FAQ' path="faq" />
      
    </Box>
      <Button sx={styles.button}>Download app</Button>
    </Box>
  );
}

export default Navbar