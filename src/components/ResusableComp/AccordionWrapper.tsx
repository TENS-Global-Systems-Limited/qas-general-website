import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { Add, Minimize } from "@mui/icons-material";

type Props = {
  summary: ReactNode;
  accordion: string;
  selected: string;
  children: ReactNode;
  handleChange: () => void;
};

const AccordionWrapper = ({
  summary,
  accordion,
  selected,
  children,
  handleChange,
}: Props) => {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        border:
          accordion === selected
            ? `1px solid ${theme.palette.primary.main}`
            : "none",
        borderRadius: "5px",
        padding: "8px 5px",
        backgroundColor: "unset",
      }}
      expanded={accordion === selected}
      onChange={() => handleChange()}
      elevation={0}
    >
      <AccordionSummary
        sx={{
          svg: {
            color: theme.palette.primary.main,
          },
        }}
        expandIcon={accordion === selected ? <Minimize /> : <Add />}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionWrapper;
