import Link from "next/link";
import Image from "next/image";
import {getHeader } from "@/services/strapi";

export interface MenuItem {
  id: number;
  label: string;
  url: string;
}

export interface HeaderProps {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: {url: string};
  menu: MenuItem[];
}

export async function Header() {
  const headerData: HeaderProps | null = await getHeader();

  if (!headerData) return null;

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const logoUrl = headerData.logo?.url
    ? baseUrl + headerData.logo.url
    : null;

  const menu = headerData.menu ?? [];

  return (
    <header className="bg-[#ffff] centered gap-5 relative text-neutral px-5 py-10 flex flex-col md:flex-row items-center justify-center border-b border-black/20">

      <Link href="/" className="relative md:absolute md:left-5">

        {logoUrl && (
          <Image
            src={logoUrl}
            alt="Logo Cogna"
            className="w-32 h-auto"
            width={128}
            height={47}
          />
        )}

      </Link>

      <nav>
        <ul className="flex gap-8">
          {menu.map((item: MenuItem, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="text-p1 text-neutral hover:text-hover hover:border-b pb-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
}