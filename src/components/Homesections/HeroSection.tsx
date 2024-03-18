import { PRIMARY_COLOR } from "@/utilities/constants";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import smilinmman from "@/assets/artismaman.png";
import elipsered from "@/assets/Ellipsered.svg";
import googleplay from "@/assets/googlePlay.png"
import appstore from "@/assets/appstore.png"
import Redlinetext from "../ResusableComp/Redlinetext";
import { Height, Padding } from "@mui/icons-material";
import Link from "next/link";

const HeroSection = () => {
  const styles = {
    bigText:{
      fontWeight:600,
      fontSize:"3rem"
    },
    image: {
      width: "23rem",
      height: "auto",
    },
    appbutton:{
      width:"15rem",
      height:"auto",
      Padding:0
    }
  };
  return (
    <Box
      sx={{
        zIndex: 2,
        display: "flex",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        height: "35rem",
        pl: "4rem",
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem"}}>
          Conncect with{" "}
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR }}
            variant="h3"
            fontWeight={600}
          >
            skilled artisans
          </Typography>
        </Typography>
        <Typography variant="h3" fontWeight={600} mb={"1rem"}>
          and imporove productivity
        </Typography>
        <Typography variant="h6" mb={"4rem"} >
          Bring the right talent to your team effortlessly
        </Typography>
        <Redlinetext
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />

        <Box sx={{display:"flex",gap:"2rem" , mt:"3.5rem"}}>
          <Link href={""}>
            {" "}
            <Image
              src={googleplay}
              alt="googlePlay"
              style={styles.appbutton}
            />{" "}
          </Link>

          <Link href={""}>
            <Image src={appstore} alt="googlePlay" style={styles.appbutton} />{" "}
          </Link>
        </Box>
      </Box>
      <Box position={"relative"} sx={{ height: "100%", width: "50%" }}>
        <Image
          src={elipsered}
          alt="elispered"
          style={{
            position: "absolute",
            zIndex: 0,
            width: "28rem",
            right: -60,
            top: -25,
          }}
        />
        <Image
          src={smilinmman}
          alt=""
          style={{
            ...styles.image,
            position: "absolute",
            zIndex: 1,
            right: -30,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
