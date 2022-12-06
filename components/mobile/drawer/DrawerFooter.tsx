import { Typography, Stack } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faDribbble, faLinkedin, faPinterest, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

export default function Footer() {
    return(
        <Grid2 className="flex justify-center flex-col mb-4 mt-2 md:mt-10 pb-7">
            <Grid2 className="text-center">
                <Typography variant="caption" className="text-neutral-800">شبکه های اجتماعی</Typography>
            </Grid2>
            <Grid2 className="pt-1 flex justify-center">
                <Grid2 className="border-t border-x-0 border-b-0 border-solid border-gray-400 pt-3">
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={{xs:1, md:2}}>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faTelegram} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" /> 
                        </Link>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" />
                        </Link>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faDribbble} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" />
                        </Link>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" />
                        </Link>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faPinterest} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" />
                        </Link>
                        <Link href="/" className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full shadow-md">
                            <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl text-zinc-800 hover:text-sky-900" />
                        </Link>
                    </Stack>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}