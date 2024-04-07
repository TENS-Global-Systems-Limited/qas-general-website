"use client";
import { PRIMARY_COLOR } from '@/utilities/constants';
import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const TermsComponents = () => {
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
          Terms And{" "}
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR }}
            variant={isMobile ? "h4" : "h3"}
            fontWeight={600}
          >
            Conditions
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant={isMobile ? "body2" : "body1"}
        >
          Home {">"} Terms and conditions
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
          These Terms and Conditions govern the use of the [Your Handyman
          Company Name] website and services. By accessing or using our website
          and services, you agree to abide by these terms.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Services
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          [Your Handyman Company Name] provides [describe your services, such as
          repair, maintenance, installation, etc.]. The services provided are
          subject to availability and scheduling.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Payment And Billing
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Payment terms and methods for services rendered will be as agreed
            upon between [Your Handyman Company Name] and the customer.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Any additional costs incurred during the provision of services will
            be communicated to the customer before implementation.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Intellectual Property
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            All content, including but not limited to text, images, logos, and
            designs, on the [Your Handyman Company Name] website are the
            intellectual property of [Your Handyman Company Name] and are
            protected by copyright laws.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            You may not use, modify, distribute, or reproduce any content from
            our website without prior written consent.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Limitation Of Liability
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            [Your Handyman Company Name] shall not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising out
            of your use of our services or website.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            We do not guarantee the accuracy, completeness, or reliability of
            the information provided on our website.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Third Party Links
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          Our website may contain links to third-party websites. We do not
          endorse or have control over the content or practices of these
          websites and are not responsible for any damages or liabilities
          arising from your use of these links.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Termination
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          [Your Handyman Company Name] reserves the right to terminate or
          suspend access to our website or services at our discretion, without
          prior notice, if we believe you have violated these Terms and
          Conditions.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Governing Law
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of [Your Jurisdiction].
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Change To Terms
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          [Your Handyman Company Name] reserves the right to modify or update
          these Terms and Conditions at any time without prior notice. Continued
          use of our website and services constitutes acceptance of these
          changes.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Contact Us
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          If you have any questions or concerns regarding these Terms and
          Conditions, please contact us at [Your Contact Information].
        </Typography>
      </Box>
    </Box>
  );
}

export default TermsComponents