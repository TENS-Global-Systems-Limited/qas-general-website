"use client";
import { PRIMARY_COLOR } from "@/utilities/constants";
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RulesComponents = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const styles = {
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "4rem", xl: "8rem" },
      mt: "4rem",
      width: "100%",
    },
    containerWidth: {
      bgcolor: "white",
      px: { xs: "1rem", sm: "1.5rem", md: "5rem", lg: "8rem", xl: "12rem" },
      width: "100%",
      py: "2rem",
      mt: "2rem",
    },
  };
  return (
    <Box sx={styles.differentScreenpx}>
      <Box>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={600}
          sx={{ mt: "2rem", textAlign: "center", mb: "1rem" }}
        >
          Community{" "}
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR }}
            variant={isMobile ? "h4" : "h3"}
            fontWeight={600}
          >
            Rules
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant={isMobile ? "body2" : "body1"}
        >
          Home {">"} Community Rules
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant={isMobile ? "body2" : "body1"}
        >
          Home {">"} Security And Compliance
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Introduction
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Absolutely, ensuring security and compliance for a handyman website
          involves implementing measures to protect user data, maintain privacy,
          and adhere to legal standards. Here are some guidelines:
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Data Encryption
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Utilize SSL (Secure Socket Layer) encryption to secure data
          transmission between users and your website. This protects sensitive
          information like login credentials, payment details, and personal
          information.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Secure Data Processing
        </Typography>

        <Typography variant={isMobile ? "body2" : "body1"}>
          Use reputable and secure payment gateways to handle transactions
          securely. Comply with PCI DSS (Payment Card Industry Data Security
          Standard) requirements if handling credit card information.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Privacy Policy
        </Typography>

        <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
          Have a clear and comprehensive privacy policy that outlines how user
          data is collected, used, and stored. Ensure transparency regarding
          data practices and provide users with options to control their data.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Data Storage Protection
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Implement robust security measures to safeguard user data stored on
            your servers. Use encryption, strong authentication, and access
            controls to prevent unauthorized access.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Regular Security Audit
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Conduct routine security audits and assessments to identify
          vulnerabilities. Regularly update software, plugins, and systems to
          patch security flaws.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Compliance With Regulations
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Ensure compliance with relevant data protection laws like GDPR
          (General Data Protection Regulation), CCPA (California Consumer
          Privacy Act), or other local regulations based on your operating
          location.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          User Consent And Opt-Out
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Obtain explicit consent from users before collecting any personal
          information. Allow users to easily opt-out of data collection or
          marketing communications.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Third Party Secutrity
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Vet and monitor third-party services or tools integrated into your
            website to ensure they meet security and compliance standards.
            Employee Training:
          </Typography>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Educate employees on security protocols, data handling procedures,
            and privacy regulations to prevent internal breaches. Incident
            Response Plan:
          </Typography>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Have a documented plan in place to respond to data breaches or
            security incidents. Outline steps to mitigate risks and notify
            affected parties promptly.
          </Typography>
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Remember, this is a general guideline. It's crucial to tailor security
          measures to the specific needs and scale of your handyman website, and
          regularly update them to adapt to evolving security threats and
          compliance standards. Consulting with cybersecurity and legal
          professionals can also ensure comprehensive security and compliance
          measures.
        </Typography>
      </Box>
    </Box>
  );
};

export default RulesComponents;
