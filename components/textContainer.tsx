import { Typography, Container, Input, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { makeStyles } from "@mui/material/styles";



// const useStyles = makeStyles((theme: any) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   icon:{
//     left:0
//   },
//   iconOpen:{
//     transform:'none'
//   },
//   formControlLabel:{
//     left:24
//   },
//   selectSelect:{
//     paddingLeft:'24px'
//   }
// }));



export default function TextContainer() {
  const [value, setValue] = useState(
    "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و وبسایت مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
  );
  const [ text, setText ] = useState("");
  const [ language, setLanguage ] = useState("");
  const [ number, setNumber ] = useState("");
  // const classes = useStyles();



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

  function makeSentence() {
    let text = "";
    value.split(".").map((val, index) => {
      text += `.${val} \n`;
      console.log(val);
    });
    setValue(text);
  }

  function makeParagraph() {
    setValue(
      "رهگذر نویسنده ی خیالی است که که متنی موقت برای طراحان گرافیک و مینویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می شود. رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی های روز دنیا که هرکدام کاربرد های مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. رهگذر کتابهای زیادی درباره ی نرم افزار های مختلف خوانده است و می تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان میتوانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه ی کاریشان به پایان برسد"
    );
  }




  return (
    <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto text-gray-400 py-4 shadow-md">
      <Container>
        <Grid2 className="flex justify-between sm:justify-end border-b border-solid border-gray-400 border-x-0 border-t-0 pb-6 pt-[0.9rem]">
          <Grid2 className="text-right w-full sm:w-28">
            <Typography className="text-neutral-800">:تعداد</Typography>
            {/* <Select value={number} onChange={(e) => setNumber(e.target.value)} displayEmpty */}
            {/* sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} */}
            {/* inputProps={{"className":"py-0 flex justify-between text-left flex-row-reverse"}} */}
            {/* className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 flex justify-start flex-row-reverse rounded-lg"  */}
            {/* IconComponent = {KeyboardArrowDownIcon} > */}
              {/* <MenuItem value=""> */}
                {/* 1 */}
              {/* </MenuItem> */}
            {/* </Select>  */}
            <select className="flex justify-start flex-row-reverse">
              <option>فارسی</option>
            </select>
          </Grid2>
          <Grid2 className="w-full text-right mx-2 sm:mx-4 sm:w-28">
            <Typography className="text-neutral-800">:نوع متن</Typography>
            <Select value={text} onChange={(e) => setText(e.target.value)} displayEmpty dir="rtl"
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            inputProps={{"className":"py-0 flex justify-between mainSelect"}}
            className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 flex justify-start rounded-lg relative left-0"
            // classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
            IconComponent = {KeyboardArrowDownIcon} >
              <MenuItem value="" onClick={makeParagraph}>
                پاراگراف
              </MenuItem>
              <MenuItem value="10" onClick={makeSentence}>
                جمله 
              </MenuItem>
              <MenuItem value="20">
                متن
              </MenuItem>
            </Select>
          </Grid2>
          <Grid2 className="text-right w-full sm:w-28">
            <Typography className="text-neutral-800">:زبان</Typography>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)} displayEmpty
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            inputProps={{"className":"py-0 border-0 flex justify-between text-left border-white"}}
            className="bg-[#efefef] text-gray-500 w-full py-1 mt-1 flex justify-start rounded-lg"
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
  );
}
