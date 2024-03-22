import { PRIMARY_COLOR } from '@/utilities/constants'
import { Box, Typography } from '@mui/material'
import React from 'react'
import line from "@/assets/line1.svg"
import Image from 'next/image'
import bidirectional from  "@/assets/bidirectionalarrow.svg"
const Service = ({title,body,icon,show}:{title:string,body:string,icon:string,show?:boolean}) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem", ml: "1.5rem" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            mb: "0.5rem",
          }}
        >
          <Typography
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              bgcolor: PRIMARY_COLOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Image src={icon} alt="" />{" "}
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1">{body}</Typography>
      </Box>
      {!show && <Image src={line} alt="" style={{ marginTop: "0.5rem" }} />}
    </Box>
  );
}

export default Service