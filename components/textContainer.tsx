import { Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextContainer() {
  return (
    <Grid2 className="bg-white rounded-lg w-full md:w-[80%] m-auto text-gray-400 py-4">
      <Container>
        <Grid2 className="flex justify-end border-b-2 border-solid border-gray-300 border-x-0 border-t-0 pb-4">
          <Grid2 className="text-right">
            <Typography className="text-black">:تعداد</Typography>
            <Button className="bg-gray-300 text-gray-500 w-20 md:w-24 py-1 mt-1 flex justify-start">
              {" "}
              <FontAwesomeIcon icon={faChevronDown} className="mr-6" /> 1
            </Button>
          </Grid2>
          <Grid2 className="text-right mx-3">
            <Typography className="text-black">:نوع متن</Typography>
            <Button className="bg-gray-300 text-gray-500 w-20 md:w-24 py-1 mt-1 flex justify-start">
              {" "}
              <FontAwesomeIcon icon={faChevronDown} className="mr-3" /> پاراگراف
            </Button>
          </Grid2>
          <Grid2 className="text-right">
            <Typography className="text-black">:زبان</Typography>
            <Button className="bg-gray-300 text-gray-500 py-1 w-20 md:w-24 mt-1 flex justify-start">
              {" "}
              <FontAwesomeIcon icon={faChevronDown} className="mr-4" /> فارسی
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 className="mt-3">
          <Typography align="right" variant="body2" className="leading-7 md:leading-9">
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
  );
}
