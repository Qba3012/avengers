import { FC } from "react";
import { useContext } from "react";
import { Grid, Box } from "@mui/material";
import AvengerCard from "./AvengerCard";
import MarvelContext from "../../store/marvel-context";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AvengersList: FC = () => {
  const { avengers } = useContext(MarvelContext);

  return (
    <Box component="main" sx={{ my: "5%", mx: "10%" }}>
      <Grid container justifyContent="center">
        {avengers.map((avenger, i) => (
          <AvengerCard avenger={avenger} key={i} />
        ))}
        <Stack spacing={2}>
          <Pagination count={3} variant="outlined" shape="rounded" color="primary" />
        </Stack>
      </Grid>
    </Box>
  );
};

export default AvengersList;
