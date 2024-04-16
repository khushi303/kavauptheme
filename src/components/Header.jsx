// import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "./common/Icons";
import ThemeDropdown from "./common/UseTheme";

export default function Header() {
    return (
        <>
            <div className="container xl:max-w-[1194px]">
                <div className="flex items-center justify-between py-6">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <ul className="flex gap-10">
                        <Link href={'/'} className="text-sm font-medium text-primary">Home</Link>
                        <li>Apps</li>
                    </ul>
                  
                </div>
            </div>
        </>
    );
}