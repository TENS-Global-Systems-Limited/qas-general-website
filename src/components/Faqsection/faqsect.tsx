"use client";
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import faqimg from "../../../public/assets/faqartisans.png"
import { FAQS, PRIMARY_COLOR } from '@/utilities/constants';
import Redlinetext from '../ResusableComp/Redlinetext';
import Image from 'next/image';
import AccordionWrapper from '../ResusableComp/AccordionWrapper';
const Faqsect = () => {
  const styles = {
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem", xl: "4rem" },
      mt: "4rem",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    bigText: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    centerimage: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
  };
  const [selectedPanel, setSelectPanel] = useState<string>("");
  const handleChange = (panel: string) => {
    selectedPanel === panel ? setSelectPanel("") : setSelectPanel(panel);
  };
  return (
    <Box>
      <Box sx={styles.differentScreenpx}>
        <Box width={"50%"} sx={{ pr: { md: "0rem", lg: "3rem", xl: "5rem" } }}>
          <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem" }}>
            Frequently Asked
          </Typography>
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR, mb: "1rem" }}
            variant="h3"
            fontWeight={600}
          >
            Questions
          </Typography>
          <Redlinetext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        </Box>
        <Box width={"50%"} sx={styles.centerimage}>
          {" "}
          <Image
            src={faqimg}
            alt=""
            style={{ width: "35rem", height: "auto" }}
          />{" "}
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#0C1231", mt: "4rem" }}>
        <Box sx={{ px: "10rem", pt: "1rem", pb: "1rem" }}>
          <Typography
            variant="h3"
            fontWeight={600}
            sx={{ mt: "2rem", mb: "1rem" }}
            color={"white"}
          >
            FAQ
          </Typography>
          <Box>
            {FAQS.map((faq, index) => (
              <AccordionWrapper
                key={index}
                selected={selectedPanel}
                accordion={faq.question}
                handleChange={() => handleChange(faq.question)}
                summary={
                  <Typography fontWeight={500} color={"white"}>
                    {faq.question}
                  </Typography>
                }
              >
                <Typography color={"white"}>{faq.answer}</Typography>
              </AccordionWrapper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Faqsect