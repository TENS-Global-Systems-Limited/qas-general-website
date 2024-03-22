import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import capentarcutting from "@/assets/carpenter-cutting.png"
interface WhoWeAreProps {
  isMobile: boolean;
}

const WhoWeAre = ({isMobile}:WhoWeAreProps) => {
  ;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          mt: "4rem",
        }}
      >
        <Image
          src={capentarcutting}
          alt=""
          style={{ width: "37rem", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: "50%", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",px:{md:"2rem",lg:"4rem",xl:"6rem"}}}>
        <Typography component={"h2"} variant="h3" fontWeight={500} sx={{mb:"2.5rem"}}>
          Who Are We
        </Typography>
        <Typography component={"p"} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor
          sit amet, consectetur adipiscing elit
        </Typography>
        <Typography component={"p"} variant="body1"sx={{mt:"1rem"}}>
          sed do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum
          dolor sit amet, consectetur adipiscing eli
        </Typography>
      </Box>
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

export default WhoWeAre