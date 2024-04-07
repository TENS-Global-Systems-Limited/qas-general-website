"use client";
import { PRIMARY_COLOR } from "@/utilities/constants";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const PolicyComponents = () => {
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
          Privacy{" "}
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR }}
            variant={isMobile ? "h4" : "h3"}
            fontWeight={600}
          >
            Policy
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant={isMobile ? "body2" : "body1"}
        >
          Home {">"} PrivacyPolicy
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
          We are committed to protecting the privacy of our users. This Privacy
          Policy outlines how we collect, use, and safeguard your personal
          information when you visit our website or use our services.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Informations we collect
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Personal Information: When you use our website or services, we may
            collect personal information such as your name, email address, phone
            number, and address.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Payment Information: If you make payments for our services, we may
            collect billing information such as credit card details or other
            payment information.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Usage Data: We may collect information about how you use our
            website, including your IP address, browser type, pages visited, and
            the time and date of your visit.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Cookies: We may use cookies and similar tracking technologies to
            enhance your experience on our website.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          How we use your Information
        </Typography>
        <Typography component={"ul"}>
          <Typography component={"li"} variant={isMobile ? "body2" : "body1"}>
            Providing Services: We use the information collected to deliver the
            services you request, schedule appointments, and communicate with
            you.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Improving Services: Your information helps us improve our services,
            customize your experience, and respond to customer service requests
            more efficiently.
          </Typography>
          <Typography
            component={"li"}
            variant={isMobile ? "body2" : "body1"}
            mt={"1rem"}
          >
            Marketing: With your consent, we may send promotional emails or
            newsletters about our services, special offers, or updates.
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Information Sharing
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties without your consent, except for the purpose of
          delivering the requested service. We may share information with
          trusted third parties who assist us in operating our website,
          conducting our business, or servicing you, as long as they agree to
          keep this information confidential.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Data Security
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          We prioritize the security of your personal information and take
          appropriate measures to protect it from unauthorized access,
          alteration, disclosure, or destruction.
        </Typography>
      </Box>
      <Box sx={styles.containerWidth}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={"0.5rem"}
        >
          Updates To This Privacy Policy
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          We may update this Privacy Policy from time to time. We encourage you
          to review this page periodically for any changes.
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
          If you have any questions regarding this Privacy Policy or your
          personal information, please contact us at [Your Contact Information].
          By using our website or services, you consent to the terms of this
          Privacy Policy.
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>
          This Privacy Policy was last updated on [Date]. Remember to seek legal
          advice or have a legal professional review the policy to ensure it
          complies with relevant laws and regulations in your jurisdiction.
        </Typography>
      </Box>
    </Box>
  );
};

export default PolicyComponents;
