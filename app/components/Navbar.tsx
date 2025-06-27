"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between px-6 py-10 md:px-24">
        <Link href="/" className="text-zinc-200 font-bold text-base md:text-xl">
          Copy<span className="text-green-600">Mint</span>
        </Link>

        <ul className={isOpen ? "open animate-zoomIn" : ""}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  " text-zinc-50 border-b-2 border-zinc-200 pb-1 translate-y-10":
                    link.href === currentPath,
                  "text-zinc-100": link.href !== currentPath,
                  "transition-colors font-medium": true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/getstarted" className="text-base underline text-zinc-200">
          Get Started
        </Link>
        <div className="block md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <CgClose className="transition-colors text-3xl" />
          ) : (
            <RxHamburgerMenu className="transition-colors text-3xl" />
          )}
        </div>
      </nav>
    </header>
  );
}
