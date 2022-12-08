import { Typography, Container, Input, Select, MenuItem, Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import axios from "axios";



export default function TextContainer() {
  const [value, setValue] = useState(
    "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و وبسایت مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
  );
  const [ text, setText ] = useState("");
  const [ language, setLanguage ] = useState("");
  const [ number, setNumber ] = useState("1");
  const [ alertValue, setAlertValue ] = useState<boolean>(false);  
  const [ textType, setTextType ] = useState("paragraph");


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


  function handleText(type:any, e:any) {
    const text = "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و وبسایت مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد";
    let output= "";

    switch (type) {
      case "paragraph":
        setValue(
          "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
        );
        setTextType("paragraph");
        break;

      case "sentence":
        text.split(".", Number(e)).map((val) => {
          output += `. ${val}`;
        });
        setValue(output);
        setTextType("sentence");
        break;

      case "word":
        text.split(" ", Number(e)).map((val) => {
          output += `${val} `;
        });
        setValue(output);
        setTextType("word");
        break;
    
      default:
        break;
    }
  }

  function handleClick(e:any) {

    switch (textType) {
      case "paragraph":
        handleText("paragraph", e);
        break;

      case "sentence":
        handleText("sentence", e);
        break;

      case "word":
        handleText("word", e);
        break;
    
      default:
        break;
    }
  }




  return (
    <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto text-gray-400 py-4 shadow-md">
      <Container>
        <Grid2 className="flex justify-between sm:justify-end border-b border-solid border-gray-400 border-x-0 border-t-0 pb-6 pt-[0.9rem]">
          <Grid2 className="text-right w-full sm:w-28">
            <Typography className="text-neutral-800">:تعداد</Typography>
            <Select value={number} onChange={(e) => {
              setNumber(e.target.value);
              handleClick(e.target.value);
            }} displayEmpty
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
            inputProps={{"className":"py-0 flex justify-end text-right mr-3"}}
            className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 mainSelect rounded-lg" 
            IconComponent = {KeyboardArrowDownIcon} >
              <MenuItem value={1}>
                1
              </MenuItem>
              <MenuItem value={2}>
                2
              </MenuItem>
              <MenuItem value={3}>
                3
              </MenuItem>
              <MenuItem value={4}>
                4
              </MenuItem>
              <MenuItem value={5}>
                5
              </MenuItem>
              <MenuItem value={10}>
                10
              </MenuItem>
              <MenuItem value={15}>
                15
              </MenuItem>
            </Select> 
          </Grid2>
          <Grid2 className="w-full text-right mx-2 sm:mx-4 sm:w-28">
            <Typography className="text-neutral-800">:نوع متن</Typography>
            <Select value={text} onChange={(e) => setText(e.target.value)} displayEmpty 
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            inputProps={{"className":"py-0 flex justify-end text-right"}}
            className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 mainSelect rounded-lg" 
            IconComponent = {KeyboardArrowDownIcon} >
              <MenuItem value="" onClick={() => handleText("paragraph", number)}>
                پاراگراف
              </MenuItem>
              <MenuItem value="10" onClick={() => handleText("sentence", number)}>
                جمله 
              </MenuItem>
              <MenuItem value="20" onClick={() => handleText("word", number)}>
                کلمه
              </MenuItem>
            </Select>
          </Grid2>
          <Grid2 className="text-right w-full sm:w-28">
            <Typography className="text-neutral-800">:زبان</Typography>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)} displayEmpty
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            inputProps={{"className":"py-0 flex justify-end text-right"}}
            className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 mainSelect rounded-lg" 
            IconComponent = {KeyboardArrowDownIcon} >
              <MenuItem value="">
                فارسی
              </MenuItem>
            </Select>
          </Grid2>
        </Grid2>
        <Grid2 className="mt-3">
          <Input
            className="text-gray-500 mt-2 mb-2 w-full border-0 h-auto leading-7 sm:leading-[2.5rem] overflow-auto text-right text-[0.8rem] flex justify-center items-center"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            disableUnderline
            multiline
            readOnly
          />
        </Grid2>
        <Grid2 className="flex justify-center mt-3 mb-[1rem]">
            <CopyToClipboard text={value}>
              <Button className="border-solid border-[2px] border-[#1D87E2] bg-white text-sky-600 w-28 rounded-lg" onClick={() => setAlertValue(true)}>
                کپی متن
              </Button>
            </CopyToClipboard>
            <Button className="bg-[#1D87E2] text-white w-28 ml-4 rounded-lg"
            onClick={fetchFile}>
              دانلود متن
            </Button>
            <Snackbar open={alertValue} autoHideDuration={5000} onClose={() => setAlertValue(false)} anchorOrigin={{ vertical: "bottom", horizontal:"right" }}>
              <Alert onClose={() => setAlertValue(false)} severity="success" sx={{ width: '100%' }}>
                !متن کپی شد
              </Alert>
            </Snackbar>
          </Grid2>
      </Container>
    </Grid2>
  );
}
