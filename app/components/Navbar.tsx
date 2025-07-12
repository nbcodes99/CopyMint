"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useSession } from "next-auth/react";
import "../globals.css";

export default function Navbar() {
  const currentPath = usePathname();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Generate", href: "/generate" },
    { label: "Pricing", href: "/pricing" },
  ];

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav className="navbar relative flex items-center animate-slide-down justify-between px-6 py-3 bg-black/10 border border-zinc-700 rounded-xl backdrop-blur-md">
        <Link
          href="/"
          className="text-zinc-200 font-bold text-base md:text-xl hidden md:block"
        >
          Copy<span className="text-orange-500">Mint</span>
        </Link>

        <ul className={isOpen ? "open" : ""}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames(
                  "transition-colors font-medium hover:text-orange-400",
                  {
                    "text-orange-500 border-b border-orange-500":
                      link.href === currentPath,
                  }
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {status === "loading" ? null : session?.user ? (
          <Link
            href="/dashboard"
            className={classnames(
              "z-20 text-sm px-4 py-1.5 border rounded-md transition font-medium",
              {
                "bg-white/10 text-white border-zinc-600 hover:bg-white/20":
                  currentPath !== "/dashboard",
                "bg-orange-500 text-white border-orange-500":
                  currentPath === "/dashboard",
              }
            )}
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/getstarted"
            className="z-20 text-sm font-medium px-4 py-1.5 bg-white/10 text-white border border-zinc-600 rounded-md hover:bg-white/20 transition"
          >
            Get Started
          </Link>
        )}

        <div className="z-20 hamburger" onClick={toggleNavbar}>
          {isOpen ? (
            <CgClose className="transition-colors text-3xl text-white" />
          ) : (
            <RxHamburgerMenu className="transition-colors text-3xl text-white" />
          )}
        </div>
      </nav>
    </header>
  );
}
