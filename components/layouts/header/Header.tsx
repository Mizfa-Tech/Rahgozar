import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography, Button } from "@mui/material";
import DensityLargeIcon from "@mui/icons-material/DensityLarge";
import { useState } from "react";
import MobileDrawer from "../../mobile/drawer/MobileDrawer";

type Props = {
  index: any;
};

export default function Header(props: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid2 className="mt-8 mb-12 md:my-20 text-center">
      <Grid2 sx={{ display: { md: "none" } }} className="text-left">
        <Button onClick={() => setOpen(!open)} className="flex justify-start">
          <DensityLargeIcon className="text-black" />
        </Button>
        <MobileDrawer open={open} setOpen={setOpen} index={props.index} />
      </Grid2>
      <Grid2>
        <Typography variant="h4" className="font-bold mb-3">
          رهگذر
        </Typography>
        <Typography variant="body2" className="text-gray-600 w-11/12 m-auto sm:w-full text-right sm:text-center">
          رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت
          مینویسد
        </Typography>
      </Grid2>
    </Grid2>
  );
}
