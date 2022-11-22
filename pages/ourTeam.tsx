import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import teamMember from "../public/images/person.jpg"

const member = [
  {
    name: "یونس چلبی",
    job: "طراح رابط کاربری",
    picture: teamMember,
  },
  {
    name: "یونس چلبی",
    job: "طراح رابط کاربری",
    picture: teamMember,
  },
  {
    name: "یونس چلبی",
    job: "طراح رابط کاربری",
    picture: teamMember,
  },
  {
    name: "یونس چلبی",
    job: "طراح رابط کاربری",
    picture: teamMember,
  },
];

export default function Ourteam() {
  return (
    <MainLayout index={6}>
      <Grid2 className="bg-white rounded-lg w-[80%] m-auto py-4">
        <Container>
            <Grid2 className="text-center">
            <Typography variant="h4" className="text-bold m-2" >تیم ما</Typography>
            <Typography variant="body2" className="text-gray-500">
                رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و
                وبسایت مینویسد
            </Typography>
            </Grid2>
            <Grid2 className="flex justify-between my-9">
              {
                member.map((val, index) => {
                  return(
                    <Grid2 key={index}>
                      <Image src={val.picture} alt="Team Member" className="w-36 h-32 rounded-md" />
                      <Typography variant="subtitle2" align="right" className="text-black">{val.name}</Typography>
                      <Typography variant="subtitle2" align="right" className="text-gray-400">{val.job}</Typography>
                    </Grid2>
                  );
                })
              }
            </Grid2>
        </Container>
      </Grid2>
    </MainLayout>
  );
}
