import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Patient Info",
    href: "/outreach",
  },
  {
    label: "AI Test",
    href: "/ai test"
  }

];

export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMobile(false);
  }, []);

  return (
          <div className="flex justify-center py-4 px-12 shadow-[0_-8px_35px_0_rgba(54, 209, 202, 0.3)]">
          <div className="flex justify-between items-center text-lg font-medium text-accent max-w-[1400px] w-full lg:justify-evenly">
        <Link href="/">
          <Image
            src="\tsalogo.svg"
            alt="Logo"
            width={130}
            height={30}
            className="cursor-pointer"
          />
        </Link>
        {links.map(({ label, href }) => (
          <Link key={label} href={href} className="hidden lg:inline-block">
            <p
              className={
                "cursor-pointer" +
                (router.pathname === href
                  ? " underline decoration-[#FFB302] decoration-8"
                  : "")
              }
            >
              {label}
            </p>
          </Link>
        ))}
        {/* <a
          href="//medium.com"
          target="_blank"
          rel="noreferrer"
          className="button hidden lg:inline-block"
          style={{ backgroundColor: '#DB9101', color: '#FFFFFF' }}
        >
          Theotechnis
        </a> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block lg:hidden cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setShowMobile(!showMobile)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {showMobile && (
        <MobileNavbar
          currentRoute={router.pathname}
          close={() => setShowMobile(false)}
        />
      )}
    </div>
  );
}
 