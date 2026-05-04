import Link from "next/link";
import Image from "next/image";
import { getFooter } from "@/services/strapi";
import { LinkedinIcon, InstagramIcon, FacebookIcon  } from "@/components/ui/icons";

export async function Footer() {

    const footerData = await getFooter();

    const { logo, copyright, socialLink, link } = footerData;

    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

    return(
        <footer className="bg-neutral py-15 px-9">
            <div className="centered flex flex-col md:flex-row gap-12 w-full">
                <Image src={baseUrl + logo.url} width={128} height={361} alt="logo cogna" className="w-12 h-33.75 md:w-32 md:h-90.25" />

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-5 md:flex-row justify-between">
                        <nav>
                            <ul className="flex flex-col gap-2">
                                {link.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} className="text-p1 text-white hover:border-b">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div>
                            <ul className="flex items-center justify-center gap-4">
                                {socialLink.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} className="text-p1 w-13 h-13 flex items-center justify-center rounded-full bg-primary">
                                            {link.socialNetwork === 'Facebook' && <FacebookIcon className="w-5 h-5 text-white" />}
                                            {link.socialNetwork === 'Instagram' && <InstagramIcon className="w-5 h-5 text-white" />}
                                            {link.socialNetwork === 'Linkedin' && <LinkedinIcon className="w-5 h-5 text-white" />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    

                    <p className="text-white text-center md:text-left">{copyright}</p>
                </div>
            </div>
        </footer>
    )
}