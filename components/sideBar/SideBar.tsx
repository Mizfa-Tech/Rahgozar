import { List, ListItem, Typography, ListItemButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPen,
  faUser,
  faMobile,
  faWallet,
  faQuestion,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
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
    href: "/",
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

export default function SideBar(props: Props) {

  const [stateIndex, setStateIndex] = useState(props.index);

  return (
    <List className="bg-white text-gray-400 rounded-lg pt-7 pb-14 mt-[1.7rem]">
      {items.map((val, index) => {
        return (
          <Link href={val.href} key={index}>
            <ListItem className="flex justify-end px-0">
              <ListItemButton
                className={`w-full flex justify-end border-sky-600 border-y-0 border-r-0 border-l-[3px] py-0 ${index == stateIndex ? "border-solid" : ""}`}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                onClick={() => setStateIndex(index)}
              >
                <Typography className={`text-right mx-3 ${index == stateIndex ? "text-black" : ""}`}>{val.title}</Typography>
                <FontAwesomeIcon icon={val.icon} className={`${index == stateIndex ? "text-sky-600" : ""}`} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
