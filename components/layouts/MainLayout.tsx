import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "../sideBar/SideBar";

type Props = {
  children: any;
  index: number,
};

export default function MainLayout(props: Props) {
  return (
    <Grid2>
      <Container>
        <Grid2 container>
          <Grid2 md={10}>
            <Grid2>
              <Header />
            </Grid2>
            <Grid2>{props.children}</Grid2>
            <Grid2>
              <Footer />
            </Grid2>
          </Grid2>
          <Grid2 md={2} className="flex justify-start items-center">
            <SideBar index={props.index} />
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}
