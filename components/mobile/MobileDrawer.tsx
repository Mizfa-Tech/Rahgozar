import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Drawer } from "@mui/material";
import SideBar from "../sideBar/SideBar"

type Props = {
  open: any,
  setOpen: any,
  index: any,
};

export default function MobileDrawer(props: Props) {

  return (
    <Grid2 className="w-[200px]">
      <Drawer open={props.open} onClose={() => props.setOpen(false)} anchor="right">
        <SideBar index={props.index} />
      </Drawer>
    </Grid2>
  );
}
