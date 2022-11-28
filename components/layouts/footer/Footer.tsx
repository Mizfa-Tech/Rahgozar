import { Typography, Stack } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faDribbble, faLinkedin, faPinterest, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

export default function Footer() {
    return(
        <Grid2 className="flex justify-center flex-col mb-4 mt-12">
            <Grid2 className="text-center">
                <Typography variant="body1" >شبکه های اجتماعی</Typography>
            </Grid2>
            <Grid2 className="pt-1 flex justify-center">
                <Grid2 className="border-t-2 border-x-0 border-b-0 border-solid border-gray-400 pt-3">
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faTelegram} className="text-2xl text-zinc-800" /> 
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-zinc-800" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faDribbble} className="text-2xl text-zinc-800" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-zinc-800" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faPinterest} className="text-2xl text-zinc-800" />
                        </Link>
                        <Link href="/" className="hover:text-sky-900 bg-white w-10 h-10 flex justify-center items-center rounded-full">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl text-zinc-800" />
                        </Link>
                    </Stack>
                </Grid2>
            </Grid2>
            <Grid2 className="mt-4 text-center">
                <Typography variant="body1" className="text-gray-600">طراحی شده توسط <Link href="https://meechand.com" className="text-violet-800">می چند</Link></Typography>
            </Grid2>
        </Grid2>
    );
}