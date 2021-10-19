import { FC } from "react";
import { Grid, Divider, Box, Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ mx: 5, mb: 5}}>
      <Grid container direction="column" spacing={1}>
        <Divider flexItem={true} />
        <Grid container item direction="column" alignItems="center">
          <Typography color="secondary">
            &copy; Jakub Ogórkiewicz
          </Typography>
          <Typography color="secondary">Junior Software Developer</Typography>
          <Typography color="secondary">Objectivity Marvel Studio</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
