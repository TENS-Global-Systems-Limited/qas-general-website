import { Box, Button, Typography } from "@mui/material";
import React from "react";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/Twitter.svg";
import linkeden from "@/assets/Linkedin.svg";
import insta from "@/assets/instagram.svg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Message } from "@mui/icons-material";
import phone from "@/assets/phone.svg"
import Link from "next/link";
import { PRIMARY_COLOR } from "@/utilities/constants";
const Footer = () => {
  const styles = {
    socialLogos: {
      width: "2rem",
    },
    button: {
      bgcolor: PRIMARY_COLOR,
      color: "white",
      px: "1rem",
    },
    mainContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      mt: "1.5rem",
      px: "4rem",
    },
  };
  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: "0.5rem" }}>
          <Image src={facebook} alt="" style={styles.socialLogos} />
          <Image src={twitter} alt="" style={styles.socialLogos} />
          <Image src={linkeden} alt="" style={styles.socialLogos} />
          <Image src={insta} alt="" style={styles.socialLogos} />
        </Box>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscin elit,
        </Typography>
        <Image
          src={logo}
          alt="logo"
          style={{ width: "9rem", height: "auto", marginTop: "6rem" }}
        />
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={600} mb={"1.5rem"}>
          Contacts
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", mb: "1rem" }}
        >
          <Message />
          Qick@gmail.com
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Image src={phone} alt="" />
          Qick@gmail.com
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={600} mb={"1.5rem"}>
          Legal
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link href={""}>
            <Typography variant="body2">Privacy Policy</Typography>
          </Link>
          <Link href={""}>
            {" "}
            <Typography variant="body2">Terms and Conditions</Typography>
          </Link>
          <Link href={""}>
            {" "}
            <Typography variant="body2">
              Security and Compliance
            </Typography>{" "}
          </Link>
          <Link href={""}>
            {" "}
            <Typography variant="body2"> Community Rules</Typography>
          </Link>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={600}>
          Get the app
        </Typography>
        <Button sx={styles.button}>Download app</Button>
      </Box>
    </Box>
  );
};

export default Footer;
