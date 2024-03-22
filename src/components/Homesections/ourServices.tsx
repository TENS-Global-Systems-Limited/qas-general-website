import { Box } from "@mui/material";
import React from "react";
import Service from "../ResusableComp/service";
import bidirectional from "@/assets/bidirectionalarrow.svg";
import headPhones from "@/assets/headphones.svg"
import secured from "@/assets/trusted.svg"
import Image from "next/image";
import eclipseSide from "@/assets/Ellipseside.svg";
import eclipse10 from "@/assets/Ellipse 10.svg";
const OurServices = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        padding: "3rem 4rem 1rem 4rem",
        display: "flex",
        justifyContent: "space-evenly",
        position:"relative",
      }}
    >
      <Image style={{position:"absolute",left:0,bottom:0}}  src={eclipseSide}  alt=""/>
      <Image style={{position:"absolute",right:0,bottom:0}}  src={eclipse10}  alt=""/>
      <Service
        title="Active Artisans"
        body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
        icon={bidirectional}
      />
      <Service
        title={"Constant Support"}
        body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
        icon={headPhones}
      />
      <Service
        title="Easy Payment"
        body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
        icon={secured}
      />
      <Service
        title="Guarantee"
        body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
        icon={secured}
        show
      />
    </Box>
  );
};

export default OurServices;
