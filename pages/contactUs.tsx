import { Container, Input, Typography } from "@mui/material";
import MainLayout from "../components/layouts/MainLayout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function ContactUs() {
  return (
    <MainLayout index={3}>
      <Grid2 className="bg-white rounded-lg w-[80%] m-auto text-gray-400 py-4 mt-[6.5rem]">
        <Container className="my-4">
          <Typography align="center" className="text-black">با ما صحبت کنید</Typography>
          <Grid2 className="my-3 flex flex-col items-end">
            <Input
              placeholder="نام (الزامی)"
              className="w-5/12 bg-gray-200 text-gray-800 rounded-lg px-2"
              required
              disableUnderline
            />
            <Input
              placeholder="ایمیل (الزامی)"
              className="w-5/12 bg-gray-200 text-gray-800 mt-2 rounded-lg px-2"
              required
              disableUnderline
            />
            <Input
              placeholder="شماره تماس"
              className="w-5/12 bg-gray-200 text-gray-800 mt-2 rounded-lg px-2"
              disableUnderline
            />
            <Input
              placeholder="نظر شما (الزامی)"
              className="w-full h-48 bg-gray-200 text-gray-800 mt-2 rounded-lg flex justify-end items-start px-2"
              disableUnderline
              multiline
              required
            />
          </Grid2>
        </Container>
      </Grid2>
    </MainLayout>
  );
}
