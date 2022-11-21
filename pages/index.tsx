import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import SideBar from "../components/sideBar/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rahgozar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Grid2 className="grid template">
          <SideBar />
        </Grid2>
      </MainLayout>
    </div>
  );
}
