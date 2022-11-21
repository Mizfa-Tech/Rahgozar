import { List, ListItem, Typography, ListItemButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPen,
  faUser,
  faMobile,
  faWallet,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    title: "آقای رهگذر",
    icon: faPenToSquare,
    href: "/",
  },
  {
    title: "متن باز",
    icon: faPen,
    href: "/",
  },
  {
    title: "درباره ما",
    icon: faUser,
    href: "/",
  },
  {
    title: "تماس با ما",
    icon: faMobile,
    href: "/",
  },
  {
    title: "کمک مالی",
    icon: faWallet,
    href: "/",
  },
  {
    title: "چرا آقای رهگذر",
    icon: faQuestion,
    href: "/",
  },
];

export default function SideBar() {

  const [stateIndex, setStateIndex] = useState(0);

  return (
    <List className="bg-white text-gray-400 rounded-lg pt-11 py-20 mt-[3.1rem]">
      {items.map((val, index) => {
        return (
          <Link href={val.href} key={index}>
            <ListItem className="flex justify-end px-0">
              <ListItemButton
                className={`w-full flex justify-end border-sky-600 border-y-0 border-r-0 border-l-[3px] py-0 ${index == stateIndex ? "border-solid" : ""}`}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                onClick={() => setStateIndex(index)}
              >
                <Typography className="text-right mx-3">{val.title}</Typography>
                <FontAwesomeIcon icon={val.icon} className={`${index == stateIndex ? "text-sky-600" : ""}`} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
