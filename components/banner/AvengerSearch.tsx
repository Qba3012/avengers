import { Card, CardContent, CardHeader, Grid, TextField, MenuItem, Button } from "@mui/material";
import { Search } from "@material-ui/icons";
import { ChangeEvent, FC, useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import MarvelContext from "../../store/marvel-context";

const AvengerSearch: FC = () => {
  const { series } = useContext(MarvelContext);
  const router = useRouter();

  const [selection, setSelection] = useState(router.query.id);

  const handleChangeSelection = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelection(event.target.value);
  };

  const search = () => {
    router.push(`/${selection}`);
  };

  return (
    <Card>
      <CardHeader
        title="Znajdź Avengera"
        titleTypographyProps={{ variant: "h5" }}
        avatar={<Search fontSize="large" />}
      />
      <CardContent>
        <Grid container spacing={3} sx={{ maxWidth: "200%" }}>
          <Grid item xs={6}>
            <TextField
              id="series-title"
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              select
              fullWidth
              value={selection}
              onChange={handleChangeSelection}
            >
              {series.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField id="name" fullWidth onChange={() => {}} label="Imię superbohatera"/>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="primary" onClick={search}>
              Szukaj
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AvengerSearch;
