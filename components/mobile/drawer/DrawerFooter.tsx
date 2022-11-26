import { Typography, Stack } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faDribbble, faLinkedin, faPinterest, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

export default function DrawerFooter() {
    return(
        <Grid2 className="flex justify-center flex-col my-5">
            <Grid2 className="text-center">
                <Typography variant="body1" >شبکه های اجتماعی</Typography>
            </Grid2>
            <Grid2 className="pt-1 flex justify-center">
                <Grid2 className="border-t-2 border-x-0 border-b-0 border-solid border-gray-400 pt-3">
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faTelegram} className="text-xl" /> 
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faDribbble} className="text-xl" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faPinterest} className="text-xl" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </Link>
                    </Stack>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}