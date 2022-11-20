import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type Props = {
  children: any;
};

export default function MainLayout(props: Props) {
  return (
    <Grid2>
      <Container>
        <Grid2>
          <Header />
        </Grid2>
        <Grid2>{props.children}</Grid2>
        <Grid2>
          <Footer />
        </Grid2>
      </Container>
    </Grid2>
  );
}
