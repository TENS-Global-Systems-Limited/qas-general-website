import { Height } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Cards = ({title, body}:{title:string,body:string}) => {
  const styles = {
    container: {
      width: "25rem",
      bgcolor: "white",
      boxShadow: "1px 1px 9px rgba(0, 0, 0, 0.3)",
      px: "2rem",
      py: "1rem",
      borderRadius:"8px"
    },
  };
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" fontWeight={600} textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {body}
      </Typography>
    </Box>
  );
};

export default Cards;
