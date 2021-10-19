import type { InferGetServerSidePropsType, NextPage } from "next";
import Banner from "../../components/banner/Banner";
import MainLayout from "../../layout/MainLayout";
import AvengersList from "../../components/avengersList/AvengersList";
import { useContext, useEffect } from "react";
import MarvelContext from "../../store/marvel-context";
import { getAvailableSeries, getAvengersBySeries } from "../../service/marvel-service";
import Avenger from "../../model/web/Avanger";
import Series from "../../model/web/Series";

type Params = {
  params: {
    id: string;
  };
};

const Avengers: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  avengers,
  series,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const { setAvengers, setSeries } = useContext(MarvelContext);
  const avengersList = JSON.parse(avengers) as Avenger[];
  const seriesList = JSON.parse(series) as Series[];

  useEffect(() => {
    setAvengers(avengersList);
    setSeries(seriesList);
  }, [avengers]);

  return (
    <MainLayout>
      <Banner />
      <AvengersList />
    </MainLayout>
  );
};

export default Avengers;

export const getStaticProps = async ({ params }: Params) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }
  const seriesResponse = await getAvailableSeries();
  const charactersResponse = await getAvengersBySeries(params.id);

  const avengers = charactersResponse?.data.results.map((result) => new Avenger(result));
  const series = seriesResponse?.data.results.map((result) => new Series(result));

  if (!avengers || !series) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      avengers: JSON.stringify(avengers),
      series: JSON.stringify(series),
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const seriesResponse = await getAvailableSeries();
  let paths = [] as Params[];

  if (seriesResponse?.data.results) {
    paths = seriesResponse.data.results.map((result) => {
      return {
        params: {
          id: result.id.toString(),
        },
      };
    });
  }

  return {
    paths,
    fallback: false,
  };
};
