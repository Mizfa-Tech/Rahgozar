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


const items = [
    {
      title: "رهگذر",
      icon: faPenToSquare,
      href: "/",
    },
    {
      title: "متن من",
      icon: faPen,
      href: "/myText",
    },
    {
      title: "درباره ما",
      icon: faUser,
      href: "/",
    },
    {
      title: "تماس با ما",
      icon: faMobile,
      href: "/contactUs",
    },
    {
      title: "کمک مالی",
      icon: faWallet,
      href: "/",
    },
    {
      title: "چرا رهگذر",
      icon: faQuestion,
      href: "/",
    },
    {
      title: "دست اندرکاران",
      icon: faUsers,
      href: "/ourTeam",
    },
  ];

 type Props = {
    index: number,
 }

export default function DrawerItems(props: Props) {

  const [stateIndex, setStateIndex] = useState(props.index);


    return(
        <List className="text-gray-400 rounded-lg pt-10 pb-7 bg-white">
          {items.map((val, index) => {
            return (
              <Link href={val.href} key={index}>
                <ListItem className="flex justify-end px-0">
                  <ListItemButton
                    className={`w-full flex justify-end border-sky-600 border-y-0 border-r-0 border-l-[4px] mb-1 px-0 py-1 ${index == stateIndex ? "border-solid" : ""}`}
                    onClick={() => setStateIndex(index)}
                  >
                    <Typography className={`text-right mx-3 ${index == stateIndex ? "text-black" : ""} text-base`}>{val.title}</Typography>
                    <FontAwesomeIcon icon={val.icon} className={`${index == stateIndex ? "text-sky-600" : ""} text-2xl w-8`} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
    );
}