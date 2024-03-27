
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccordionWrapper from '../ResusableComp/AccordionWrapper';
import { FAQS } from '@/utilities/constants';

const Faq = () => {
  const [selectedPanel, setSelectPanel] = useState<string>("");
  const handleChange = (panel: string) => {
    selectedPanel === panel ? setSelectPanel("") : setSelectPanel(panel);
  };
  const styles = {
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "7rem", xl: "9rem" },
      mt: "4rem",
      
    },
    
  };
  return (
    <Box sx={styles.differentScreenpx}>
      <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem",mb:"1rem" }}>
        FAQ
      </Typography>
      <Box>
        {FAQS.map((faq,index)=>(
          <AccordionWrapper key={index} selected={selectedPanel} accordion={faq.question} handleChange={()=>handleChange(faq.question)} summary= {<Typography fontWeight={500}>{faq.question}</Typography> }>
            <Typography>{faq.answer}</Typography>
          </AccordionWrapper>
        ))}
     </Box>
    </Box>
  );
}

export default Faq