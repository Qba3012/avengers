import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import Logo from "../ui/Logo";
import AvengerSearch from "./AvengerSearch";

const Banner: FC = () => {
  return (
    <Box sx={{ height: "70vh" }} component="header">
      <Box
        sx={{
          position: "absolute",
          height: "70vh",
          width: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Image
          alt="Banner backround"
          src="/banner-bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="0% 85%"
          quality={100}
        />
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "#C4C4C4",
            opacity: "50%",
            zIndex: 2,
          }}
        />
      </Box>
      <Grid container direction={"column"} rowSpacing={5} sx={{ padding: 5, width: "100%" }}>
        <Grid container item xs={12}>
          <Grid item xs={2}>
            <Logo />
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={6}>
            <AvengerSearch />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
