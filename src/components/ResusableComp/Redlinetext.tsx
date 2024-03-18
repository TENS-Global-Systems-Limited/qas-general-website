import { Box, Typography, colors } from '@mui/material'
import React from 'react'

const Redlinetext = ({text}:{text:string}) => {
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
      <Typography variant='body1' sx={styles.text}>
        {text}
      </Typography>
    </Box>
  );
}

export default Redlinetext