import Link from "next/link";
import { LogoFooterIcon, LinkedinIcon, InstagramIcon, FacebookIcon  } from "@/components/ui/icons";

export function Footer() {

    const footerLinks = [
        { href: "/sobre", label: "Nossas marcas" },
        { href: "/solucoes", label: "Impresa" },
        { href: "/solucoes", label: "Investidores" },
        { href: "/solucoes", label: "Sustentabilidade" },
        { href: "/solucoes", label: "Compliance" },
        { href: "/solucoes", label: "Empresas" },
        { href: "/solucoes", label: "Carreiras" },
    ];

    const socialLinks = [
        { href: "https://www.facebook.com/cognaeducacao", icon: <FacebookIcon className="w-5 h-5 text-white" /> },
        { href: "https://www.instagram.com/cognaeducacao/", icon: <InstagramIcon className="w-5 h-5 text-white" /> },
        { href: "https://www.linkedin.com/company/cogna-educacao/", icon: <LinkedinIcon className="w-5 h-5 text-white" /> },
    ];

    return(
        <footer className="bg-neutral py-15 px-9">
            <div className="max-w-360 mx-auto flex flex-col md:flex-row gap-12 w-full">
                <LogoFooterIcon className="w-12 h-33.75 md:w-32 md:h-90.25" />

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-5 md:flex-row justify-between">
                        <nav>
                            <ul className="flex flex-col gap-2">
                                {footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-p1 text-white hover:border-b">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div>
                            <ul className="flex items-center justify-center gap-4">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-p1 w-13 h-13 flex items-center justify-center rounded-full bg-primary">
                                            {link.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    

                    <p className="text-white text-center md:text-left">&copy; {new Date().getFullYear()} Cogna Educação. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}