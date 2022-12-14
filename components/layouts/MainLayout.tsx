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
        <Grid2 container className="flex">
          <Grid2 xs={12}>
            <Grid2 xs={12} md={10}>
              <Header index={props.index} />
            </Grid2>
            <Grid2 xs={12} container>
              <Grid2 xs={12} md={10}>{props.children}</Grid2>
              <Grid2 sx={{display: {xs: "none", md: "flex"}}} md={2} className="justify-start items-start">
                <SideBar index={props.index} />
              </Grid2>
            </Grid2>
            <Grid2 xs={12} md={10}>
              <Footer />
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}
