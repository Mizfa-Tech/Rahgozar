import MainLayout from "../components/layouts/MainLayout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Container, Button } from "@mui/material";
import { useState } from "react";

export default function MyText() {

  return (
    <MainLayout index={1}>
      <Grid2 className="bg-white rounded-lg w-[80%] m-auto py-4">
        <Container>
          <Grid2 className="flex justify-between border-b-2 border-solid border-gray-300 border-x-0 border-t-0 pb-4 mt-5">
            <Typography className="flex items-center justify-center">
              {" "}
              <span className="w-10 h-7 bg-gray-300 text-gray-500 flex justify-center items-center rounded-lg pt-[0.9px] mr-1">
                100
              </span>{" "}
              :شمارش کلمات{" "}
            </Typography>
            <Typography>:متن مورد نظر خود را در کادر پایین بنویسید</Typography>
          </Grid2>
          <Grid2 className="mt-3">
          <Typography align="right" variant="body2" className="leading-9 text-gray-500 mt-6">
            رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت
            مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و
            پیاده سازی اولیه وب سایت ها استفاده می شود. آقای رهگذر در مورد همه
            چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز
            دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط
            زندگی شماست. آقای رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف
            خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد.
            طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و
            مشکلات سخت در حوزه ی کاریشان به پایان برسد
          </Typography>
        </Grid2>
        <Grid2 className="flex justify-center my-3">
          <Button className="border-solid border-[1px] border-sky-600 bg-white text-sky-600 w-28 rounded-xl">
            کپی متن
          </Button>
          <Button className="bg-sky-600 text-white w-28 ml-4 rounded-xl">
            دانلود متن
          </Button>
        </Grid2>
        </Container>
      </Grid2>
    </MainLayout>
  );
}
