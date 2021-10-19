import type { InferGetServerSidePropsType, NextPage } from "next";
import { useEffect } from "react";
import { getAvailableSeries } from "../service/marvel-service";
import Logo from "../components/ui/Logo";
import { Grid, LinearProgress } from "@mui/material";
import { useRouter } from "next/dist/client/router";

const Home: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  series,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/${series[0]}`);
    }, 1000);
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ position: "absolute", width: "100vw", height: "100vh", backgroundColor: "#ED1D24" }}
    >
      <Grid item xs={6}>
        <Logo />
        <LinearProgress sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
};

export default Home;

export const getStaticProps = async () => {
  const seriesResponse = await getAvailableSeries();
  const series = seriesResponse?.data.results.map((result) => result.id);

  if (!series) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      series: series,
    },
  };
};
