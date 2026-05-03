import { LogoIcon } from "@/components/ui/icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#ffff] mx-auto gap-5 max-w-360 relative text-neutral px-5 py-10 flex flex-col md:flex-row items-center justify-center border-b border-black/20">
        <Link href="/" className="relative md:absolute md:left-5">
            <LogoIcon className="cursor-pointer" />
        </Link>
        <nav>
            <ul className="flex gap-8">
                <li>
                    <Link href="/" className="text-p1 text-neutral hover:text-hover hover:border-b pb-1">
                        Início
                    </Link>
                </li>
                <li>
                    <Link href="/solucoes" className="text-p1 text-neutral hover:text-hover hover:border-b pb-1">
                        Soluções
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}