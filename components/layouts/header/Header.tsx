import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography } from "@mui/material";


export default function Header() {
    return(
        <Grid2 className="my-14">
            <Container className="text-center">
                <Typography variant="h4" className="font-bold mb-4">رهگذر</Typography>
                <Typography variant="body2" className="text-gray-600">رهگذر نویسنده ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت مینویسد</Typography>
            </Container>
        </Grid2>
    );
}