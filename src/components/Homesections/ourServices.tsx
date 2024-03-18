import { Box } from "@mui/material";
import React from "react";
import Service from "../ResusableComp/service";

const OurServices = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "white", padding: "2rem 4rem",display:"flex",justifyContent:"space-evenly" }}>
      <Service />
      <Service />
      <Service />
      
    </Box>
  );
};

export default OurServices;
