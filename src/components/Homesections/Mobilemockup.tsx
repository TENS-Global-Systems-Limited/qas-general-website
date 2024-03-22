import { PRIMARY_COLOR } from '@/utilities/constants';
import { Box, Typography } from '@mui/material'
import React from 'react'
import googleplay from "@/assets/googlePlay.png";
import appstore from "@/assets/appstore.png";
import Link from 'next/link';
import Image from 'next/image';
import radialdisplay from "@/assets/displayradial.svg"
import iphonedisplay from "@/assets/iPhone 15 Pro Portrait Mockup.png"
import iphonedisplay2 from "@/assets/iPhone 15 Pro Portrait Mockup2.png"

const Mobilemockup = () => {
  const styles = {
    differentScreenpx: {
      px: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "4rem", xl: "4rem" },
      mt: "4rem",
      display: "flex",
      justifycontent: "center",
      gap: "2rem",
    },
    appbutton: {
      width: "15rem",
      height: "auto",
      Padding: 0,
    },
  };
  return (
    <Box sx={styles.differentScreenpx}>
      <Box sx={{ width: "50%" }}>
        <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem" }}>
          Enjoy Our Quck Artisan Mobile App Features
        </Typography>
        <Typography variant="body1" sx={{ pr: "10rem", mt: "2rem" }}>
          Lorem Ipsum is a place holder text which will fill up the vacum. Lorem
          Ipsum is a place holder text which will fill up the vacum.
        </Typography>
        <Box sx={{ display: "flex", gap: "2rem", mt: "3.5rem" }}>
          <Link href={""}>
            {" "}
            <Image
              src={googleplay}
              alt="googlePlay"
              style={styles.appbutton}
            />{" "}
          </Link>

          <Link href={""}>
            <Image src={appstore} alt="googlePlay" style={styles.appbutton} />{" "}
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }} position={"relative"}>
        <Image
          src={iphonedisplay}
          alt=""
          style={{
            width: "18rem",
            height: "auto",
            position: "absolute",
            top:30,
            left:100

          }}
        />
        <Image
          src={iphonedisplay2}
          alt=""
          style={{
            width: "18rem",
            height: "auto",
            position: "absolute",
            right: "10",
          }}
        />
        <Image
          src={radialdisplay}
          alt=""
          style={{ width: "45rem", height: "auto" }}
        />
      </Box>
    </Box>
  );
}

export default Mobilemockup