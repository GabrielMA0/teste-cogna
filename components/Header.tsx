import Link from "next/link";
import Image from "next/image";
import {getHeader} from "@/services/strapi";
import type {Header, MenuItem} from "@/types";

export async function Header() {
    
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

    const headerData: Header | null = await getHeader();

    if (!headerData) return null;
    
  return (
    <header className="bg-[#ffff] centered gap-5 relative text-neutral px-5 py-10 flex flex-col md:flex-row items-center justify-center border-b border-black/20">
        <Link href="/" className="relative md:absolute md:left-5">
            <Image src={baseUrl + headerData.logo.url} alt="Logo Cogna" className="w-32 h-auto" width={128} height={47} />
        </Link>
        <nav>
            <ul className="flex gap-8">
                {headerData.menu.map((item: MenuItem) => (
                    <li key={item.id}>
                        <Link href={item.url} className="text-p1 text-neutral hover:text-hover hover:border-b pb-1">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}