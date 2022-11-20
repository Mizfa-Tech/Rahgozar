import { Typography, Stack } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faDribbble, faLinkedin, faPinterest, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

export default function Footer() {
    return(
        <Grid2 className="flex justify-center flex-col">
            <Grid2 className="text-center w-[18%] m-auto ">
                <Typography variant="body1" className="border-b-2 border-x-0 border-t-0 border-solid border-gray-400">شبکه های اجتماعی</Typography>
            </Grid2>
            <Grid2 className="pt-2">
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon icon={faTelegram} className="text-2xl" /> 
                    </Link>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl aria-hidden:false" />
                    </Link>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon icon={faDribbble} className="text-2xl" />
                    </Link>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </Link>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon icon={faPinterest} className="text-2xl" />
                    </Link>
                    <Link href="/" className="hover:text-sky-800">
                        <FontAwesomeIcon swapOpacity icon={faGithub} className="text-2xl" />
                    </Link>
                </Stack>
            </Grid2>
            <Grid2 className="mt-4 text-center">
                <Typography variant="body1" className="text-gray-600">طراحی شده توسط <Link href="https://meechand.com" className="text-violet-800">می چند</Link></Typography>
            </Grid2>
        </Grid2>
    );
}