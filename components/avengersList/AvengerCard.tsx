import { Card, CardContent, CardActions, CardMedia, Button, Typography, Grid } from "@mui/material";
import { FC } from "react";
import Avenger from "../../model/web/Avanger";

type Props = {
  avenger: Avenger;
};

const CardEstate: FC<Props> = ({ avenger }) => {
  const handleMoreClick = () => {
    window.open(avenger.wikiUrl, "_blank");
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ width: "100%", display: "flex", mb: 8 }}>
        <CardMedia
          component="img"
          height="350px"
          image={avenger.thumbnailUrl}
          alt="Avenger thumbnail"
          sx={{
            width: "40%",
            mb: -1,
          }}
        />
        <CardContent
          component="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: ".4fr 1fr .2fr",
            width: "100%",
            ml: 1,
          }}
        >
          <Typography variant="h4" sx={{ gridRow: "1/2" }}>
            {avenger.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ gridRow: "2/3" }}>
            {avenger.description}
          </Typography>

          <CardActions
            sx={{
              gridRow: "3/5",
              gridColumn: "1/3",
              justifySelf: "end",
              alignSelf: "end",
            }}
          >
            {avenger.wikiUrl && (
              <Button size="large" onClick={handleMoreClick}>
                Więcej
              </Button>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardEstate;
