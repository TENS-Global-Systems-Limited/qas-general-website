import { PRIMARY_COLOR } from '@/utilities/constants'
import { Box, Typography } from '@mui/material'
import React from 'react'
import line from "@/assets/line1.svg"
import Image from 'next/image'
const Service = () => {
  return (
    <Box sx={{display:"flex",gap:"1rem",ml:"1.5rem"}}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              bgcolor: PRIMARY_COLOR,
            }}
          ></Typography>
          <Typography variant="h6" fontWeight={500}>
            Constsnt Support
          </Typography>
        </Box>
        <Typography variant="body1">
          sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
          dolor sit.
        </Typography>
      </Box>
      <Image src={line} alt="" />
    </Box>
  );
}

export default Service