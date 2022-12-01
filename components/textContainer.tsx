import { Typography, Container, Input, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export default function TextContainer() {
  const [value, setValue] = useState(
    "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. آقای رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. آقای رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
  );
  const [ select, setSelect ] = useState("");

  return (
    <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto text-gray-400 py-4 shadow-md">
      <Container>
        <Grid2 className="flex justify-end border-b-2 border-solid border-gray-300 border-x-0 border-t-0 pb-6 pt-4">
          <Grid2 className="text-right w-20 md:w-28">
            <Typography className="text-black">:تعداد</Typography>
            <Select value={select} onChange={(e) => setSelect(e.target.value)} displayEmpty
            inputProps={{"className":"py-0 border-0 flex justify-between text-left"}}
            className="bg-gray-100 text-gray-500 w-full py-1 mt-1 flex justify-start rounded-lg border-0 select" >
              <MenuItem value="">
                1
              </MenuItem>
            </Select>
          </Grid2>
          <Grid2 className="text-right mx-2 md:mx-4 w-20 md:w-28">
            <Typography className="text-black">:نوع متن</Typography>
            <Select value={select} onChange={(e) => setSelect(e.target.value)} displayEmpty
            inputProps={{"className":"py-0 border-none flex justify-between"}}
            className="bg-gray-100 text-gray-500 w-full py-1 mt-1 flex justify-start rounded-lg border-none select" >
              <MenuItem value="">
                پاراگراف
              </MenuItem>
            </Select>
          </Grid2>
          <Grid2 className="text-right w-20 md:w-28">
            <Typography className="text-black">:زبان</Typography>
            <Select value={select} onChange={(e) => setSelect(e.target.value)} displayEmpty
            inputProps={{"className":"py-0 border-0 flex justify-between text-left"}}
            className="bg-gray-100 text-gray-500 w-full py-1 mt-1 flex justify-start rounded-lg border-0 select" >
              <MenuItem value="">
                فارسی
              </MenuItem>
            </Select>
          </Grid2>
        </Grid2>
        <Grid2 className="mt-3">
          <Input
            className="text-gray-500 mt-2 mb-2 w-full border-0 h-auto leading-9 overflow-auto text-right text-sm"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            disableUnderline
            multiline
            readOnly
          />
        </Grid2>
        <Grid2 className="flex justify-center my-3">
          <CopyToClipboard text={value}>
            <Button className="border-solid border-[1px] border-sky-600 bg-white text-sky-600 w-28 rounded-lg">
              کپی متن
            </Button>
          </CopyToClipboard>
            {/* <a href="../public/files/Rahgozar.txt" download> */}
              <Button className="bg-sky-600 text-white w-28 ml-4 rounded-lg" href="../public/files/Rahgozar.txt"
              download="Rahgozar.txt">
                دانلود متن
              </Button>
            {/* </a> */}
        </Grid2>
      </Container>
    </Grid2>
  );
}
