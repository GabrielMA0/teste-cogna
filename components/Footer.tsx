import Link from "next/link";
import Image from "next/image";
import { getFooter } from "@/services/strapi";
import { LinkedinIcon, InstagramIcon, FacebookIcon  } from "@/components/ui/icons";

interface FooterSocialLink {
    socialNetwork: string;
    url: string;
}

interface FooterLink {
    label: string;
    url: string;
}

interface FooterData {
    logo: {
        url: string;
    };
    copyright: string;
    socialLink: FooterSocialLink[];
    link: FooterLink[];
}

export async function Footer() {
  const footerData: FooterData | null = await getFooter();

  if (!footerData) return null;

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const logoUrl = footerData.logo?.url
    ? footerData.logo.url
    : null;

  const socialLink = footerData.socialLink ?? [];
  const links = footerData.link ?? [];

  return (
    <footer className="bg-neutral py-15 px-9">
      <div className="centered flex flex-col md:flex-row gap-12 w-full">

        {logoUrl && (
          <Image
            src={logoUrl}
            width={128}
            height={361}
            alt="logo cogna"
            className="w-12 h-33.75 md:w-32 md:h-90.25"
          />
        )}

        <div className="flex flex-col gap-8 w-full">

          <div className="flex flex-col gap-5 md:flex-row justify-between">

            <nav>
              <ul className="flex flex-col gap-2">
                {links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-p1 text-white hover:border-b">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <ul className="flex items-center justify-center gap-4">
                {socialLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-p1 w-13 h-13 flex items-center justify-center rounded-full bg-primary"
                    >
                      {item.socialNetwork === "Facebook" && (
                        <FacebookIcon className="w-5 h-5 text-white" />
                      )}
                      {item.socialNetwork === "Instagram" && (
                        <InstagramIcon className="w-5 h-5 text-white" />
                      )}
                      {item.socialNetwork === "Linkedin" && (
                        <LinkedinIcon className="w-5 h-5 text-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className="text-white text-center md:text-left">
            {footerData.copyright}
          </p>

        </div>
      </div>
    </footer>
  );
}