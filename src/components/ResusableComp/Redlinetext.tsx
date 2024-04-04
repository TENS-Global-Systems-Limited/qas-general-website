import { Box, Typography, colors } from '@mui/material'
import React from 'react'

const Redlinetext = ({text,title}:{text:string,title?:string}) => {
  const styles = {
    text: {
      borderLeft: "4px solid #D03531 ",
      padding: "0.2rem 1rem ",
      color: "#4E545F",
      fontWeight:"500"
    },
  };
  return (
    <Box>
      <Typography variant="body1" sx={styles.text}>
        {title && (
          <Typography variant="h6" fontWeight={600} mb={"0.3rem"} color={"black"}>
            {title}
          </Typography>
        )}
        {text}
      </Typography>
    </Box>
  );
}

export default Redlinetext