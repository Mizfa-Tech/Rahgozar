import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import Kiyarash from "../public/images/Kiyarash.jpg"
import Nilofar from "../public/images/Nilofar.jpg"
import Younes from "../public/images/Younes.jpg"
import Mohammad from "../public/images/Mohamad Amin.jpg"
import Head from "next/head";

const member = [
  {
    name: "نیلوفر اسماعیلی",
    job: "نویسنده ی متن",
    picture: Nilofar,
  },
  {
    name: "محمدامین بصیرنیا",
    job: "پلاگین وردپرس",
    picture: Mohammad,
  },
  {
    name: "یونس چلبی",
    job: "UI/UX طراح",
    picture: Younes,
  },
  {
    name: "کیارش حدیدیان",
    job: "فرانت اند دولوپر",
    picture: Kiyarash,
  },
];

export default function Ourteam() {
  return (
    <MainLayout index={6}>
      <Head>
        <title>تیم رهگذر</title>
        <meta name="description" content="تیم رهگذر"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto pt-2 pb-5 shadow-md">
        <Grid2 className="text-center">
          <Typography variant="h5" className="font-bold m-3" >تیم ما</Typography>
          <Typography className="text-gray-700 w-10/12 m-auto md:w-full text-right sm:text-center text-xs">
            رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت مینویسد
          </Typography>
          </Grid2>
        <Grid2 className="flex justify-between flex-col sm:flex-row-reverse sm:flex-wrap md:my-[3.90rem] px-7">
          {
            member.map((val, index) => {
              return(
                <Grid2 key={index} className=" my-5 md:my-0 w-10/12 m-auto sm:w-5/12 md:w-[21%] md:m-0 shadow-md md:shadow-md rounded-lg px-6 md:px-2 py-4">
                  <Grid2 className="flex justify-center">
                    <Image src={val.picture} alt="Team Member" className="w-32 h-32 md:w-[8.75rem] md:h-[8.75rem] rounded-md object-cover" />
                  </Grid2>
                  <Typography variant="subtitle2" className="text-black text-center sm:text-right  mt-2">{val.name}</Typography>
                  <Typography className="text-gray-500 text-center sm:text-right text-xs mt-1">{val.job}</Typography>
                </Grid2>
              );
            })
          }
        </Grid2>
      </Grid2>
    </MainLayout>
  );
}
