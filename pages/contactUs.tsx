import { Container, Input, Typography, Button } from "@mui/material";
import MainLayout from "../components/layouts/MainLayout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

export default function ContactUs() {
  const [inputData, setInputData] = useState<any>({
    inputName: "", 
    email: "",
    phoneNumber: "",
    opinion: "",
  });

  async function submit(e:any) {
    e.preventDefault();
    let result = await fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: inputData.inputName,
        email: inputData.email,
        phoneNumber: inputData.phoneNumber,
        opinion: inputData.opinion,
      })
    })
  }

  
  return (
    <MainLayout index={3}>
      <Grid2 className="bg-white rounded-xl w-full md:w-[80%] m-auto text-gray-400 py-2  shadow-md">
        <Container className="my-6">
          <Typography align="center" className="text-black font-bold">با ما صحبت کنید</Typography>
          <form className="my-5 flex flex-col items-end" onSubmit={submit}>
            <Input
              placeholder="نام (الزامی)"
              className="w-full md:w-5/12 bg-gray-100 text-gray-800 rounded-lg px-2"
              onChange={e => setInputData({...inputData ,inputName: e.target.value})}
              required
              disableUnderline
            />
            <Input
              placeholder="ایمیل (الزامی)"
              className="w-full md:w-5/12 bg-gray-100 text-gray-800 mt-3 rounded-lg px-2"
              onChange={e => setInputData({...inputData ,email: e.target.value})}
              required
              disableUnderline
            />
            <Input
              placeholder="شماره تماس"
              className="w-full md:w-5/12 bg-gray-100 text-gray-800 mt-3 rounded-lg px-2"
              onChange={e => setInputData({...inputData ,phoneNumber: e.target.value})}
              disableUnderline
            />
            <Input
              placeholder="نظر شما (الزامی)"
              className="w-full h-48 bg-gray-100 text-gray-800 mt-3 rounded-lg flex justify-end items-start px-2"
              onChange={e => setInputData({...inputData ,opinion: e.target.value})}
              disableUnderline
              multiline
              required
            />
            <Button className="bg-sky-600 text-white w-28 ml-4 rounded-lg mt-6" type="submit">
              ارسال
            </Button>
          </form>
        </Container>
      </Grid2>
    </MainLayout>
  );
}
