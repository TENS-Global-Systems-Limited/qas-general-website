import { Box, Typography } from '@mui/material'
import React from 'react'
import Cards from '../ResusableComp/Cards';

const HowItWorks = () => {
  const styles = {
   
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem", xl: "4rem" },
      mt: "4rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    
  };
  return (
    <Box sx={styles.differentScreenpx}>
      <Box sx={{ px: { md: "10rem", lg: "20rem", xl: "25rem" } }}>
        <Typography variant="h5" fontWeight={600} textAlign={"center"}>
          How It Works
        </Typography>
        <Typography variant="body1" textAlign={"center"} sx={{ mt: "1rem" }}>
          Lorem Ipsum is a place holder text which wil magnaLorem ipsum dolor
          sit amet,
        </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
        <Cards
          title="Download Application"
          body="Lorem Ipsum is a place holder text which will fill up the vacum till the actual text is ready to fill up the space"
        />
        <Cards
          title="SignUp to our Mobile Application"
          body="Lorem Ipsum is a place holder text which will fill up the vacum till the actual text is ready to fill up the space"
        />
        <Cards
          title="Explore  All our Amazing Features"
          body="Lorem Ipsum is a place holder text which will fill up the vacum till the actual text is ready to fill up the space"
        />
      </Box>
    </Box>
  );
}

export default HowItWorks