import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography, Button } from "@mui/material";
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import { useState } from "react";
import MobileDrawer from "../../mobile/MobileDrawer";

type Props = {
    index: any,
}

export default function Header(props: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return(
        <Grid2 className="my-3 md:my-14">
            <Container className="text-center">
                <Grid2 sx={{display:{md: "none"}}} className="text-left mb-2">
                    <Button onClick={() => setOpen(!open)} className="flex justify-start">
                        <DensityLargeIcon className="text-black" />
                    </Button>
                    <MobileDrawer open={open} setOpen={setOpen} index={props.index} />
                </Grid2>
                <Grid2>
                    <Typography variant="h4" className="font-bold mb-4">رهگذر</Typography>
                    <Typography variant="body2" className="text-gray-600">رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت مینویسد</Typography>
                </Grid2>
            </Container>
        </Grid2>
    );
}