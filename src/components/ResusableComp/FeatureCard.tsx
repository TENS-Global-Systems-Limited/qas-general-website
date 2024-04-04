import { PRIMARY_COLOR } from '@/utilities/constants';
import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const FeatureCard = ({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: string;
}) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem",mb:"1.2rem" }}>
      <Box sx={{display:"flex",alignItems:"start"}}>
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
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              bgcolor: PRIMARY_COLOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr:"0.5rem"
            }}
          >
            {" "}
            <Image src={icon} alt="" />{" "}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600} mb={"0.5rem"}>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard