import { PRIMARY_COLOR } from '@/utilities/constants';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import capentarcutting from "@/assets/carpenter-cutting.png";
import Redlinetext from '../ResusableComp/Redlinetext';
import FeatureCard from '../ResusableComp/FeatureCard';
import clock from "../../../public/assets/clock.svg"
import star from "../../../public/assets/star.svg"
import note from "../../../public/assets/note.svg"
import bank from "../../../public/assets/bank.svg"
import bell from "../../../public/assets/bell.svg"
const ArtisanFeatures = () => {
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
  return (
    <Box>
      <Box sx={styles.differentScreenpx}>
        <Box width={"50%"} sx={{ pr: { md: "0rem", lg: "3rem", xl: "5rem" } }}>
          <Typography variant="h3" fontWeight={600} sx={{ mt: "2rem" }}>
            Quick Artisan App
          </Typography>
          <Typography
            component={"span"}
            sx={{ color: PRIMARY_COLOR, mb: "3rem" }}
            variant="h3"
            fontWeight={600}
          >
            Features
          </Typography>
          <Redlinetext text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  " />
        </Box>
        <Box width={"50%"} sx={styles.centerimage}>
          {" "}
          <Image
            src={capentarcutting}
            alt=""
            style={{ width: "35rem", height: "auto" }}
          />{" "}
        </Box>
      </Box>

      <Box sx={styles.differentScreenpx}>
        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: { md: "2rem", lg: "3rem" },
            columnGap: "1rem",
            px: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "4rem",
            },
            py: "4rem",
          }}
        >
          <FeatureCard
            icon={clock}
            title="Real-Time Service Tracking"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
          <FeatureCard
            icon={note}
            title="In App Messaging"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
          <FeatureCard
            icon={bank}
            title="Payment Intergration"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
          <FeatureCard
            icon={star}
            title="Review And Rating System"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
          <FeatureCard
            icon={note}
            title="Service History"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
          <FeatureCard
            icon={bell}
            title="Push Notifications and Reminder"
            body="sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit."
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ArtisanFeatures