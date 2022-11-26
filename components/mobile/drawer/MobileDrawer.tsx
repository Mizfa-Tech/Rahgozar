import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Drawer, Button, List, ListItem, Typography, ListItemButton, Container } from "@mui/material";
import { faClose, faPenToSquare,
  faPen,
  faUser,
  faMobile,
  faWallet,
  faQuestion,
  faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import DrawerFooter from "./DrawerFooter";
import DrawerItems from "./DrawerItems";




type Props = {
  open: any,
  setOpen: any,
  index: any,
};

export default function MobileDrawer(props: Props) {


  const drawer = (
    <Grid2 className="bg-gray-100 h-screen">
      <Container>
        <Button onClick={() => props.setOpen(false)} className="text-3xl flex justify-start text-black">
          <FontAwesomeIcon icon={faClose}/>
        </Button>
        <Typography variant="h5" align="center" className="font-bold">رهگذر</Typography>
        <Container className="px-7">
          <DrawerItems index={props.index} />
          <DrawerFooter />
        </Container>
      </Container>
    </Grid2>
  );

  return (
    <Grid2>
      <Drawer open={props.open} onClose={() => props.setOpen(false)} anchor="right">
        {drawer}
      </Drawer>
    </Grid2>
  );
}
