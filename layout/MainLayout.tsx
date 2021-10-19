import Head from "next/head";
import { FC } from "react";
import Footer from "../components/ui/Footer";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Avenger finder</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <>{children}</>
      <Footer />
      </>
  );
};

export default MainLayout;
