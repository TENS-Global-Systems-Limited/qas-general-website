import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import about1 from "../../../public/assets/about1.png";
import about2 from "../../../public/assets/about2.png";
import about3 from "../../../public/assets/about3.png";
import Redlinetext from "../ResusableComp/Redlinetext";
const about11 = "/assets/about1.png";
const about23 = "/assets/about2.png";
const about33 = "/assets/about3.png";
const styles = {
  img: {
    width: "30rem",
    height: "auto",
  },
  differentScreenpx: {
    px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem", xl: "4rem" },
    mt: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
};
const Company = () => {
  return (
    <Box sx={styles.differentScreenpx}>
      <Box sx={{ width: "100%",display:"flex",flexDirection:"column",alignItems:"center" }}>
        <Typography variant="h5" fontWeight={500} textAlign={'center'}>
          Company
        </Typography>
        <Typography variant="body1" width={"30rem"} textAlign={"center"}>
          do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum
          dolor sit amet, do eiusmod tempor incididunt ut labore et dolore
          magnaLorem ipsum dolor sit amet,
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt:"4rem"
          }}
        >
          <Image src={about1} alt="" style={styles.img} quality={100} />
          <Image src={about2} alt="" style={styles.img} placeholder="blur" />
          <Image src={about3} alt="" width={0} height={0} style={styles.img} />
        </Box>
      </Box>
      <Box width={"100%"} sx={{ display: "flex",mt:"4rem" }}>
        <Redlinetext
          title="Lorem Ipsum"
          text="Quis in pharetra tellus aliquam sollicitudin commodo. Ut egestas in malesuada sollicitudin. Volutpat feugiat nibh venenatis non arcu velit."
        />
        <Redlinetext
          title="Lorem Ipsum"
          text="Quis in pharetra tellus aliquam sollicitudin commodo. Ut egestas in malesuada sollicitudin. Volutpat feugiat nibh venenatis non arcu velit."
        />
        <Redlinetext
          title="Lorem Ipsum"
          text="Quis in pharetra tellus aliquam sollicitudin commodo. Ut egestas in malesuada sollicitudin. Volutpat feugiat nibh venenatis non arcu velit."
        />
      </Box>
    </Box>
  );
};

export default Company;
