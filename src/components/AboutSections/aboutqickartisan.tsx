import { PRIMARY_COLOR } from "@/utilities/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import Redlinetext from "../ResusableComp/Redlinetext";
import Image from "next/image";
import aboutartisanimage from "@/assets/aboutbusinees.png"

const Aboutatisan = () => {
  const styles = {
     differentScreenpx :{
        px:{xs:"1rem",sm:"1.5rem",md:"2.5rem",lg:"3rem",xl:"4rem"},
        mt:"4rem",
        display:"flex",
        justifyContent:"center",
        width:"100%"
      },
    bigText: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    centerimage:{
      display:"flex",
      justifyContent:"end",
      alignItems:"center"
    } 
    
  };
  return (
    <Box>
      <Box sx={styles.differentScreenpx}>
        <Box width={"50%"} sx={{ pr: { md: "0rem", lg: "3rem", xl: "5rem" } }}>
          <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem" }}>
            About Quick
            <Typography
              component={"span"}
              sx={{ color: PRIMARY_COLOR }}
              variant="h3"
              fontWeight={600}
            >
              Atisan
            </Typography>
          </Typography>
          <Redlinetext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        </Box>
        <Box width={"50%"} sx={styles.centerimage}>
          {" "}
          <Image
            src={aboutartisanimage}
            alt=""
            style={{ width: "35rem", height: "auto" }}
          />{" "}
        </Box>
      </Box>
      <Box
        sx={{
          px: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2.5rem",
            lg: "3rem",
            xl: "4rem",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(/assets/businessexperts.png)`,
            width: "100%",
            height: "50rem",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pl:"4rem",
            display:"flex",
            alignItems:"center",
            mt:"4rem"
          }}
        >
          {" "}
          <Box sx={{ height: "20rem", width: "37rem", bgcolor: "#D03531C4",pl:"2rem",pt:"3rem" }}>
            <Typography sx={{ color: "white" }} variant="h3" fontWeight={500}>
              Our Story
            </Typography>
            <Typography sx={{ color: "white",fontWeight:"300" ,mt:"1rem"}} variant="h6" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutatisan;
