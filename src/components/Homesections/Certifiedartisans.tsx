import { Box, Typography } from '@mui/material'
import React from 'react'
import femalerepaire from "@/assets/femalebicyclerapair.png"
import hardhat from "@/assets/hardhat.png"
import mechanic from "@/assets/mechanic.png"
import airconditioner from "@/assets/airconditionman.png"
import Image from 'next/image'
import { Height } from '@mui/icons-material'
const Certifiedartisans = () => {
  const styles = {
    img: {
      width: "20rem",
      height: "auto",
    },
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem", xl: "4rem" },
      mt: "4rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap:"2rem"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    },
  };
  return (
    <Box sx={styles.differentScreenpx}>
      <Box sx={{px:{md:"10rem",lg:"20rem",xl:"25rem"}}}>
        <Typography variant="h5" fontWeight={600} textAlign={"center"}>
          Certified Artisans
        </Typography>
        <Typography variant="body1" textAlign={"center"} sx={{mt:"1rem"}}>
          do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum
          dolor sit amet, do eiusmod tempor incididunt ut labore et dolore
          magnaLorem ipsum dolor sit amet,
        </Typography>
      </Box>
      <Box sx={styles.imageContainer}>
        <Image src={femalerepaire} alt="" style={styles.img} />
        <Image src={hardhat} alt="" style={styles.img} />
        <Image src={mechanic} alt="" style={styles.img} />
        <Image src={airconditioner} alt="" style={styles.img} />
      </Box>
    </Box>
  );
}

export default Certifiedartisans