import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Head from "next/head";
// import { title } from "process";
import MainLayout from "../components/layouts/MainLayout";
import TextContainer from "../components/textContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>رهگذر - ابزار‌هایی برای متن</title>
        <meta name="description" content="رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت مینویسد" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid2>
        <MainLayout index={0}>
          <TextContainer />
        </MainLayout>
      </Grid2>
    </div>
  );
}
