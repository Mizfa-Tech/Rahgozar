import MainLayout from "../components/layouts/MainLayout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Container, Button, Input } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import axios from "axios";


export default function MyText() {
  
  const [number, setNumber] = useState(112);
  const [value, setValue] = useState(
    "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
  );


  const fetchFile = () => {
    axios({
          url: "./files/Rahgozar.txt",
          method: "GET",
          responseType: "blob"
      }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
              "download",
              "Rahgozar.txt"
          );
          document.body.appendChild(link);
          link.click();
          link.parentNode?.removeChild(link);
      });
  }




  return (
    <MainLayout index={1}>
      <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto py-4 shadow-md">
        <Container>
          <Grid2 className="flex flex-col md:flex-row justify-between border-b-2 border-solid border-gray-300 border-x-0 border-t-0 pb-4 mt-[1.5rem]">
            <Typography className="flex items-center justify-end md:justify-center text-gray-700">
              {" "}
              <span className="w-10 h-7 bg-gray-100 text-gray-400 flex justify-center items-center rounded-lg pt-[0.9px] mr-2">
                {number}
              </span>{" "}
              :شمارش کلمات{" "}
            </Typography>
            <Typography className="text-right text-gray-700">:متن مورد نظر خود را در کادر پایین بنویسید</Typography>
          </Grid2>
          <Grid2>
            <Input className="text-gray-500 mt-7 mb-3 w-full border-0 h-auto leading-[2.5rem] overflow-auto text-[0.8rem] text-right"  value={value}
            // onChange={(e) => setValue(e.currentTarget.value)}
            disableUnderline
            multiline
            rows={5}
            onChange={(e) => {
              setNumber(e.currentTarget.value?.split(" ").length);
              setValue(e.currentTarget.value);
            }} />
          </Grid2>
          <Grid2 className="flex justify-center mt-3 mb-[1rem]">
            <CopyToClipboard text={value}>
              <Button className="border-solid border-[2px] border-[#1D87E2] bg-white text-sky-600 w-28 rounded-lg">
                کپی متن
              </Button>
            </CopyToClipboard>
            <Button className="bg-[#1D87E2] text-white w-28 ml-4 rounded-lg"
            onClick={fetchFile}>
              دانلود متن
            </Button>
          </Grid2>
        </Container>
      </Grid2>
    </MainLayout>
  );
}
